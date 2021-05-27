import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

//firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const handleUserProfile = async ({ userAuth, additionalData }) => {
    //userAuth = firebase data sent back upon sign-in
    if (!userAuth) return;
    //uid = user ID
    const { uid } = userAuth;

    //find if user exists in database
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    //if new user (doesn't exist) then:
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();
        const userRoles = ['user'];
    
        try {
          await userRef.set({
            displayName,
            email,
            createdDate: timestamp,
            userRoles,
            ...additionalData
          });
        } catch(err) {
          // console.log(err);
        }
    }
    
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    })
}

//open rules for database
/*
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}


Secure rules?
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true
      allow write: if request.auth != null && request.auth.uid == request.resource.data.author_uid
    }
  }
}

*/
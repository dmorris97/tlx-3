import {firestore} from '../../firebase/utils'

export const handleAddPost = posts => {
    return new Promise((resolve, reject) => {
        firestore.collection('post')
        .doc()
        .set(posts)
        .then(() => {
            resolve()
        }) 
        .catch(err => {
            reject(err)
        })
    })
}

export const handleFetchPost = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('post')
            .get()
            .then(snapshot => {
                const postArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
                resolve(postArray)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleDeletePost = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('post')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
    })
}
import {firestore} from '../../firebase/utils'

export const handleAddStream = streams => {
    return new Promise((resolve, reject) => {
        firestore.collection('stream')
        .doc()
        .set(streams)
        .then(() => {
            resolve()
        }) 
        .catch(err => {
            reject(err)
        })
    })
}

export const handleFetchStream = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('stream')
            .get()
            .then(snapshot => {
                const streamArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
                resolve(streamArray)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleDeleteStream = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('stream')
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
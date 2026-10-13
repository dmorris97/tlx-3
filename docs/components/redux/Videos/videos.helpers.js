import {firestore} from './../../firebase/utils'

export const handleAddVideo = video => {
    return new Promise((resolve, reject) => {
        firestore.collection('videos')
        .doc()
        .set(video)
        .then(() => {
            resolve()
        }) 
        .catch(err => {
            reject(err)
        })
    })
}

export const handleFetchVideos = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('videos')
            .get()
            .then(snapshot => {
                const videosArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
                resolve(videosArray)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleDeleteVideo = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('videos')
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
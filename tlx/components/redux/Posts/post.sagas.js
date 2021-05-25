import {auth} from '../../firebase/utils'
import {takeLatest, put, all, call} from 'redux-saga/effects'
import {setPost, fetchPostStart} from './post.actions'
import {handleAddPost, handleFetchPost, handleDeletePost} from './post.helpers'
import postTypes from './post.types'


export function* addPost({payload:{ postTitle, postContent, postImage}}) { //this line
    try {
        const timestamp = new Date()
        yield handleAddPost({
            postTitle, 
            postContent,
            postImage,
            postAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        })
        yield put(
            fetchPostStart()
        )
    } catch(err) {
        //console.log(err)
    }
}

export function* onAddPostStart() {
    yield takeLatest(postTypes.ADD_NEW_POST_START, addPost)
}

export function* fetchPost() {
    try {
        const posts = yield handleFetchPost()
        yield put(
            setPost(posts)
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onFetchPostStart() {
    yield takeLatest(postTypes.FETCH_POST_START, fetchPost)
}

export function* deletePost({payload}) {
    try {
        yield handleDeletePost(payload)
        yield put(
            fetchPostStart()
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onDeletePostStart() {
    yield takeLatest(postTypes.DELETE_POST_START, deletePost)
}

export default function* postSagas() {
    yield all ([
        call(onAddPostStart),
        call(onFetchPostStart),
        call(onDeletePostStart),
    ])
}
import postTypes from './post.types'

export const addPostStart = postData => ({
    type: postTypes.ADD_NEW_POST_START,
    payload: postData
})

export const fetchPostStart = () => ({
    type: postTypes.FETCH_POST_START
})

export const setPost = post => ({
    type: postTypes.SET_POST,
    payload: post
})

export const deletePostStart = postID => ({
    type: postTypes.DELETE_POST_START,
    payload: postID
})


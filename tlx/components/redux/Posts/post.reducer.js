import postTypes from './post.types'

const INITIAL_STATE = {
    post: []
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postTypes.SET_POST:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state
    }
}

export default postReducer
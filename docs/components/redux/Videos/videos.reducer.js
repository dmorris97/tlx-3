import videoTypes from './videos.types'

const INITIAL_STATE = {
    videos: []
}

const videosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case videoTypes.SET_VIDEOS:
            return {
                ...state,
                videos: action.payload
            }
        default:
            return state
    }
}

export default videosReducer
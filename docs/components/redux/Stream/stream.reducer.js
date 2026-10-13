import streamTypes from './stream.types'

const INITIAL_STATE = {
    stream: []
}

const streamReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case streamTypes.SET_STREAM:
            return {
                ...state,
                stream: action.payload
            }
        default:
            return state
    }
}

export default streamReducer
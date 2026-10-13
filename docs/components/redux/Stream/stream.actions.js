import streamTypes from './stream.types'

export const addStreamStart = streamData => ({
    type: streamTypes.ADD_NEW_STREAM_START,
    payload: streamData
})

export const fetchStreamStart = () => ({
    type: streamTypes.FETCH_STREAM_START
})

export const setStream = stream => ({
    type: streamTypes.SET_STREAM,
    payload: stream
})

export const deleteStreamStart = streamID => ({
    type: streamTypes.DELETE_STREAM_START,
    payload: streamID
})
import videoTypes from './videos.types'

export const addVideoStart = videoData => ({
    type: videoTypes.ADD_NEW_VIDEO_START,
    payload: videoData
})

export const fetchVideosStart = () => ({
    type: videoTypes.FETCH_VIDEOS_START
})

export const setVideos = videos => ({
    type: videoTypes.SET_VIDEOS,
    payload: videos
})

export const deleteVideoStart = videoID => ({
    type: videoTypes.DELETE_VIDEO_START,
    payload: videoID
})
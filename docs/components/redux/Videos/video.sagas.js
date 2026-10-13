import {auth} from '../../firebase/utils'
import {takeLatest, put, all, call} from 'redux-saga/effects'
import {setVideos, fetchVideosStart} from './videos.actions'
import {handleAddVideo, handleFetchVideos, handleDeleteVideo} from './videos.helpers'
import videoTypes from './videos.types'


export function* addVideo({payload:{ 
    videoCategory,
    videoName,
    //videoThumbnail,
    videoContent
}}) {
    try {
        const timestamp = new Date()
        yield handleAddVideo({
            videoCategory,
            videoName,
            //videoThumbnail,
            videoContent,
            videoAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        })
        yield put(
            fetchVideosStart()
        )
    } catch(err) {
        //console.log(err)
    }
}

export function* onAddVideoStart() {
    yield takeLatest(videoTypes.ADD_NEW_VIDEO_START, addVideo)
}

export function* fetchVideos() {
    try {
        const videos = yield handleFetchVideos()
        yield put(
            setVideos(videos)
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onFetchVideosStart() {
    yield takeLatest(videoTypes.FETCH_VIDEOS_START, fetchVideos)
}

export function* deleteVideo({payload}) {
    try {
        yield handleDeleteVideo(payload)
        yield put(
            fetchVideosStart()
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onDeleteVideoStart() {
    yield takeLatest(videoTypes.DELETE_VIDEO_START, deleteVideo)
}

export default function* videoSagas() {
    yield all ([
        call(onAddVideoStart),
        call(onFetchVideosStart),
        call(onDeleteVideoStart),
    ])
}
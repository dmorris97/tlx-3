import {auth} from '../../firebase/utils'
import {takeLatest, put, all, call} from 'redux-saga/effects'
import {setStream, fetchStreamStart} from './stream.actions'
import {handleAddStream, handleFetchStream, handleDeleteStream} from './stream.helpers'
import streamTypes from './stream.types'


export function* addStream({payload:{ streamName, streamMonth, streamDay, streamYear, streamTime, streamMeridiem}}) {
    try {
        const timestamp = new Date()
        yield handleAddStream({
            streamName, 
            streamMonth,
            streamDay,
            streamYear,
            streamTime,
            streamMeridiem,
            streamAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        })
        yield put(
            fetchStreamStart()
        )
    } catch(err) {
        //console.log(err)
    }
}

export function* onAddStreamStart() {
    yield takeLatest(streamTypes.ADD_NEW_STREAM_START, addStream)
}

export function* fetchStream() {
    try {
        const streamS = yield handleFetchStream()
        yield put(
            setStream(streamS)
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onFetchStreamStart() {
    yield takeLatest(streamTypes.FETCH_STREAM_START, fetchStream)
}

export function* deleteStream({payload}) {
    try {
        yield handleDeleteStream(payload)
        yield put(
            fetchStreamStart()
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onDeleteStreamStart() {
    yield takeLatest(streamTypes.DELETE_STREAM_START, deleteStream)
}

export default function* streamSagas() {
    yield all ([
        call(onAddStreamStart),
        call(onFetchStreamStart),
        call(onDeleteStreamStart),
    ])
}
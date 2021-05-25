import {all, call} from 'redux-saga/effects'
import userSagas from './User/user.sagas';
import videoSagas from './Videos/video.sagas'
import streamSagas from './Stream/stream.sagas'
import postSagas from './Posts/post.sagas'


export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(videoSagas),
        call(streamSagas),
        call(postSagas)
    ])
}

import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import videosReducer from './Videos/videos.reducer'
import streamReducer from './Stream/stream.reducer'
import postReducer from './Posts/post.reducer'

export default combineReducers({
    user: userReducer,
    videosData: videosReducer,
    streamData: streamReducer,
    postData: postReducer
})

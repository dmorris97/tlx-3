import React from 'react'
import {deleteStreamStart} from '../../../redux/Stream/stream.actions'
import {useDispatch} from 'react-redux'

const StreamRet = ({ streamName, streamMonth, streamDay, streamYear, streamTime, streamMeridiem, documentID }) => {
    const dispatch = useDispatch()

    const defaultName = "Social Distance Sessions"
    
    if (!streamName || !streamMonth || !streamDay || !streamYear || !streamTime) return(
        <div className='SR-streamT'>
            <div className='SR-stream-name'>
                {defaultName}
            </div>

        </div>
    ) 
    const date = new Date();
    const dM = date.getMonth() + 1
    const dD = date.getDate()
    const dY = date.getFullYear()
    const today = dM + '-' + dD + '-' + dY

    const strM = parseInt(streamMonth)
    const strD = parseInt(streamDay)
    const strY = parseInt(streamYear)
    const strT = streamTime
    const strMer = streamMeridiem
    const sTime = strM + '-' + strD + '-' + strY
    const ourStreamTime = sTime + ' ' + strT + strMer

    if (dM > strM || dD > strD || dY > strY) {deleteStreamStart(documentID)};

    return (
        <div className='SR-streamT'>
            <div className='SR-stream-name'>
                {streamName}
            </div>
            <div className='SR-stream-time'>
                {ourStreamTime}
            </div>

            
        </div>
    )
}

export default StreamRet
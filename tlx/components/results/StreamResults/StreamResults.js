import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchStreamStart} from '../../redux/Stream/stream.actions'
import StreamRet from './StreamRet/StreamRet'

const mapState = ({streamData}) => ({
    stream: streamData.stream
})

const StreamResults = ({}) => {
    const dispatch = useDispatch()
    const {stream} = useSelector(mapState)

    useEffect(() => {
        dispatch(
            fetchStreamStart()
        )
    }, [])

    if (!Array.isArray(stream)) return null

    if (stream.length < 1) {
        return (
            <div className='SR-streamRet'>
                <p>
                    Social Distance Sessions
                </p>
            </div> 
        )
    }

    return (
        <div className='SR-streamRet'>
            {stream.map((streams, pos) => {
                const {streamName, streamMonth, streamDay, streamYear, streamTime, streamMeridiem, documentID} = streams


                if (!streamName || !streamMonth || !streamDay || !streamYear || !streamTime || !streamMeridiem) return null

                const configStreamRet = {
                    streamName, 
                    streamMonth,
                    streamDay,
                    streamYear,
                    streamTime,
                    streamMeridiem,
                    documentID
                }

                return (
                    <StreamRet {...configStreamRet}/>
                )
            })}
        </div>
    )
}

export default StreamResults
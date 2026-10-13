import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchVideosStart} from '../../redux/Videos/videos.actions'
import VideoRet from './VideoRet/VideoRet'

const mapState = ({videosData}) => ({
    videos: videosData.videos
})

const VideoResults = ({}) => {
    const dispatch = useDispatch()
    const {videos} = useSelector(mapState)

    useEffect(() => {
        dispatch(
            fetchVideosStart()
        )
    }, [])

    if (!Array.isArray(videos)) return null

    if (videos.length < 1) {
        return (
            <div className='VR-videos'>
                <p>
                    NO VIDEOS FOUND
                </p>
            </div> 
        )
    }

    function compare(a, b) {
        const time1 = a.createdDate;
        const time2 = b.createdDate;

        let comp = 0;
        if (time1 > time2) {
            comp = 1;
        } else if (time1 < time2) {
            comp = -1
        }
        return comp * -1
    }

    videos.sort(compare)

    return (
        <div className='VR-videos VR-video-border'>
            {videos.map((video, pos) => {
                const {//videoThumbnail, 
                    videoName, videoContent} = video


                if (//!videoThumbnail || 
                    !videoName || !videoContent) return null

                const configVideoRet = {
                    //videoThumbnail, 
                    videoName, 
                    videoContent
                }

                return (
                    
                    <VideoRet {...configVideoRet}/>
                )
            })}
        </div>
    )
}
                    /*<div key={pos}>
                        {videoName}
                        <br></br>
                        {videoContent}

                    </div>*/

export default VideoResults
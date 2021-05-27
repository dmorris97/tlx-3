import React from 'react'
import Fade from 'react-reveal/Fade';

const VideoRet = ({
    //videoThumbnail, 
    videoName, 
    videoContent
}) => {
    
    if (//!videoThumbnail || 
        !videoName || 
        !videoContent) return null

    const str1 = "https://www.youtube.com/embed/"
    const str2 = videoContent
    const str3 = "?autoplay=0&origin=http://example.com"
    const ytLink = str1.concat(str2, str3)

    return (
        <div className='VR-video '>
            <Fade bottom>
            <iframe id="ytplayer" type="text/html"  className="VR-video-target" 
                src={ytLink}
                frameborder="0">
            </iframe>
            <div className='VR-v-name'>
                {videoName}
            </div>
            </Fade>
        </div>
    )
}

export default VideoRet
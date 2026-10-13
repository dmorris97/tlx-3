import React from 'react'
import Fade from 'react-reveal/Fade';
import PostAccordion from '../PostAccordion'

const PostRet = ({
    //videoThumbnail, 
    postTitle, 
    postContent,
    postImage
}) => {
    
    if (!postTitle || !postContent || !postImage) return null

    return (
        <div className='PR-post PR-post-border'>
            <Fade bottom>
            <h1 className='PR-post-title'>
                {postTitle}
            </h1>
            <img src={postImage} className="PR-post-img" alt="Post Image" />
            {/* <p className='post-text'>
                {postContent}
            </p> */}
            <text className="PR-post-foot">
                <PostAccordion
                title="Click for More"
                content={postContent}
                />
            </text>
            
            </Fade>
        </div>
    )
}

export default PostRet
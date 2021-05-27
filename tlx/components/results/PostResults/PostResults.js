import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPostStart} from '../../redux/Posts/post.actions'
import PostRet from './PostRet/PostRet'

const mapState = ({postData}) => ({
    post: postData.post
})

const PostResults = ({}) => {
    const dispatch = useDispatch()
    const {post} = useSelector(mapState)

    useEffect(() => {
        dispatch(
            fetchPostStart()
        )
    }, [])

    if (!Array.isArray(post)) return null

    if (post.length < 1) {
        return (
            <div className='PR-postRet'>
                <p>
                    Loading In The Life
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

    post.sort(compare)   

    return (
        <div className='PR-postRet'>
            {post.map((posts, pos) => {
                const {postTitle, postContent, postImage, documentID} = posts


                if (!postTitle || !postContent || !postImage ) return null

                const configPostRet = {
                    postTitle, 
                    postContent, 
                    postImage, 
                    documentID
                }

                return (
                    <PostRet {...configPostRet}/>
                )
            })}
        </div>
    )
}

export default PostResults
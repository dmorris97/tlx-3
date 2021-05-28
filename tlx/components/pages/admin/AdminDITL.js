import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {addPostStart, fetchPostStart, deletePostStart} from '../../redux/Posts/post.actions'
import Modal from '../../auth/modal/Modal';
import FormIn from '../../sign-in/form/FormIn';
import SIButton from '../../sign-in/SIButton';

const mapState = ({postData}) => ({
    post: postData.post
    
})

const AdminDITL = props => { 
    const {post} = useSelector(mapState)
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postImage, setPostImage] = useState('')
  
  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  useEffect(() => {
    dispatch(
        fetchPostStart()
    )
  }, [])

  const resetForm = () => {
    setHideModal(true)
    setPostTitle('')
    setPostContent('')
    setPostImage('')
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addPostStart({
        postTitle,
        postContent,
        postImage,
      })
    )
    resetForm()
  };

  return (

    <div className="callToActions">
      <h1 className='h1-title'>
        MANAGE POSTS
      </h1>
        <SIButton onClick={() => toggleModal()}>
            Add new post
        </SIButton>
    <Modal {...configModal}>
    <ul className='admin-ul'>
      <li className='admin-li'>
      
      </li>
      <div className="addNewVideoForm">
          <form onSubmit={handleSubmit}>

            <h2 className='admin-h2'>
              Add new post
            </h2>

            <FormIn
              label="Post Title"
              type="text"
              value={postTitle}
              handleChange={e => setPostTitle(e.target.value)}
            />
            {/* <p className='ALE-Inst'>Please Only Use Numbers!</p> */}
            
            <FormIn
              label="Post Text"
              type="text"
              value={postContent}
              handleChange={e => setPostContent(e.target.value)}
            /> 

            <FormIn
              label="Post Image"
              type="text"
              value={postImage}
              handleChange={e => setPostImage(e.target.value)}
            /> 

            <SIButton type="submit">
              Submit Post
            </SIButton>

          </form>
        </div>
        </ul>
        </Modal>

        <div className='manageVideos'>
          <h3 className='h1-table'>
            POSTS
          </h3>
              <table border='0' cellPadding='0' cellSpacing='0'>
                <tbody>
                  
                  <tr className="tr">
                    <td>
                      <table border='0' cellPadding='10' cellSpacing='0'>
                        <tbody>
                          {post.map((posts, index) => {
                            const {
                              postTitle,
                              postContent,
                              postImage,
                              documentID
                            } = posts
                            return (
                              <tr >
                                
                                <td className='table'>
                                  {postTitle}
                                </td>
                                <td className='table'>
                                  <p>
                                    :
                                  </p>
                                </td>
                                <td className='table'>
                                  {postContent}
                                </td>
                                <td className='table'>
                                  {postImage}
                                </td>
                                <td>
                                  <SIButton onClick={() => dispatch(deletePostStart(documentID))}>
                                    Delete
                                  </SIButton>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
  )}

export default AdminDITL
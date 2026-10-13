import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {addVideoStart, fetchVideosStart, deleteVideoStart} from '../../redux/Videos/videos.actions'
import Modal from '../../auth/modal/Modal';
import FormIn from '../../sign-in/form/FormIn';
import SIButton from '../../sign-in/SIButton';
import FormSelect from '../../sign-in/form/FormSelect';



/*          
<FormIn
  label="Video Thumbnail (just write anything in here for now)"
  type="text"
  value={videoThumbnail}
  handleChange={e => setVideoThumbnail(e.target.value)}
/>

<td>
  <img className='thumb' src= {videoThumbnail} />
</td>
*/

const mapState = ({videosData}) => ({
  videos: videosData.videos
})

const AdminPW = props => {
  const {videos} = useSelector(mapState)
  const dispatch = useDispatch();
  //const [videos, setVideos] = useState([]);
  const [hideModal, setHideModal] = useState(true);
  const [videoCategory, setVideoCategory] = useState('youtube');
  const [videoName, setVideoName] = useState('');
  //const [videoThumbnail, setVideoThumbnail] = useState('');
  const [videoContent, setVideoContent] = useState('');
  
  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  useEffect(() => {
    dispatch(
      fetchVideosStart()
    )
  }, [])

  const resetForm = () => {
    setHideModal(true)
    setVideoCategory('youtube')
    setVideoName('')
    //setVideoThumbnail('')
    setVideoContent('')
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addVideoStart({
        videoCategory,
        videoName,
        //videoThumbnail,
        videoContent
      })
    )
    resetForm()

  };

  return (

    <div className="callToActions">
      <h1 className='h1-title'>
        MANAGE VIDEOS
      </h1>
        <SIButton onClick={() => toggleModal()}>
            Add new video
        </SIButton>
    <Modal {...configModal}>
    <ul className='admin-ul'>
      <li className='admin-li'>
      
      </li>
      <div className="addNewVideoForm">
          <form onSubmit={handleSubmit}>

            <h2 className='admin-h2'>
              Add new video
            </h2>

            <FormSelect
              label="Type (Don't change this yet)"
              options={[{
                value: "youtube",
                name: "Youtube"
              }, {
                value: "embed",
                name: "Embed"
              }]}
              handleChange={e => setVideoCategory(e.target.value)}
            />

            <FormIn
              label="Name"
              type="text"
              value={videoName}
              handleChange={e => setVideoName(e.target.value)}
            />

            
            <p>
              *Example URL: https://www.youtube.com/watch?v=Dvv3ZiLKeSw
            </p>
            <p>
              *ID: Dvv3ZiLKeSw
            </p>
            <FormIn
              label="Video ID"
              type="text"
              value={videoContent}
              handleChange={e => setVideoContent(e.target.value)}
            />  


            <SIButton type="submit">
              Add video
            </SIButton>

          </form>
        </div>
        </ul>
        </Modal>

        <div className='manageVideos'>
          <h3 className='h1-table'>
            VIDEOS
          </h3>
              <table border='0' cellPadding='0' cellSpacing='0'>
                <tbody>
                  
                  <tr className="tr">
                    <td>
                      <table border='0' cellPadding='10' cellSpacing='0'>
                        <tbody>
                          {videos.map((video, index) => {
                            const {
                              videoName,
                              //videoThumbnail,
                              videoContent,
                              documentID
                            } = video
                            return (
                              <tr >
                                
                                <td className='table'>
                                  {videoName}
                                </td>
                                <td className='table'>
                                  <p>
                                    :
                                  </p>
                                </td>
                                <td className='table'>
                                  {videoContent}
                                </td>
                                <td>
                                  <SIButton onClick={() => dispatch(deleteVideoStart(documentID))}>
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

export default AdminPW
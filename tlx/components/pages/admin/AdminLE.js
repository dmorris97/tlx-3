import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {addStreamStart, fetchStreamStart, deleteStreamStart} from '../../redux/Stream/stream.actions'
import Modal from '../../auth/modal/Modal';
import FormIn from '../../sign-in/form/FormIn';
import SIButton from '../../sign-in/SIButton';
import FormSelect from '../../sign-in/form/FormSelect';


const mapState = ({streamData}) => ({
    stream: streamData.stream
    
})

const AdminLE = props => { 
    const {stream} = useSelector(mapState)
  const dispatch = useDispatch();
  //const [videos, setVideos] = useState([]);
  const [hideModal, setHideModal] = useState(true);
  const [streamName, setStreamName] = useState('');
  //const [videoThumbnail, setVideoThumbnail] = useState('');
  const [streamTime, setStreamTime] = useState('');
  const [streamMeridiem, setStreamMeridiem] = useState('p.m.')
  const [streamMonth, setStreamMonth] = useState('');
  const [streamDay, setStreamDay] = useState('');
  const [streamYear, setStreamYear] = useState('');
  
  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
  };

  useEffect(() => {
    dispatch(
        fetchStreamStart()
    )
  }, [])

  const resetForm = () => {
    setHideModal(true)
    setStreamName('')
    setStreamTime('')
    setStreamMeridiem('p.m.')
    setStreamMonth('')
    setStreamDay('')
    setStreamYear('')
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addStreamStart({
        streamName,
        streamMonth,
        streamDay,
        streamYear,
        streamTime,
        streamMeridiem
      })
    )
    resetForm()
  };

  return (

    <div className="callToActions">
      <h1 className='h1-title'>
        MANAGE STREAM (Only One at a Time)
      </h1>
        <SIButton onClick={() => toggleModal()}>
            Add new stream
        </SIButton>
    <Modal {...configModal}>
    <ul className='admin-ul'>
      <li className='admin-li'>
      
      </li>
      <div className="addNewVideoForm">
          <form onSubmit={handleSubmit}>

            <h2 className='admin-h2'>
              Add new stream
            </h2>

            <FormIn
              label="Stream Name"
              type="text"
              value={streamName}
              handleChange={e => setStreamName(e.target.value)}
            />
            <p className='ALE-Inst'>Please Only Use Numbers!</p>
            
            <FormIn
              label="Stream Month"
              type="text"
              value={streamMonth}
              handleChange={e => setStreamMonth(e.target.value)}
            /> 

            <FormIn
              label="Stream Day"
              type="text"
              value={streamDay}
              handleChange={e => setStreamDay(e.target.value)}
            /> 

            <FormIn
              label="Stream Year"
              type="text"
              value={streamYear}
              handleChange={e => setStreamYear(e.target.value)}
            /> 

            <FormIn
              label="Stream Time"
              type="text"
              value={streamTime}
              handleChange={e => setStreamTime(e.target.value)}
            /> 

            <FormSelect
              label="Meridiem"
              options={[{
                value: "p.m.",
                name: "p.m."
              }, {
                value: "a.m.",
                name: "a.m."
              }]}
              handleChange={e => setStreamMeridiem(e.target.value)}
            />

            <SIButton type="submit">
              Add stream
            </SIButton>

          </form>
        </div>
        </ul>
        </Modal>

        <div className='manageVideos'>
          <h3 className='h1-table'>
            STREAMS
          </h3>
              <table border='0' cellPadding='0' cellSpacing='0'>
                <tbody>
                  
                  <tr className="tr">
                    <td>
                      <table border='0' cellPadding='10' cellSpacing='0'>
                        <tbody>
                          {stream.map((streams, index) => {
                            const {
                              streamName,
                              streamMonth,
                              streamDay,
                              streamYear,
                              streamTime,
                              streamMeridiem,
                              documentID
                            } = streams
                            return (
                              <tr >
                                
                                <td className='table'>
                                  {streamName}
                                </td>
                                <td className='table'>
                                  <p>
                                    :
                                  </p>
                                </td>
                                <td className='table'>
                                  {streamMonth}
                                </td>
                                <td className='table'>
                                  {streamDay}
                                </td>
                                <td className='table'>
                                  {streamYear}
                                </td>
                                <td className='table'>
                                  {streamTime}
                                </td>
                                <td className='table'>
                                  {streamMeridiem}
                                </td>
                                <td>
                                  <SIButton onClick={() => dispatch(deleteStreamStart(documentID))}>
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

export default AdminLE
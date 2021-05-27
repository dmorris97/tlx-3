import React from 'react'
import Fade from 'react-reveal/Fade';
import EButton from './EButton';

const EventsMap = () => {
    return (
        <div className='EM-container'>
            <Fade bottom>
                <img src='/images/HalfoweenParkingMap.png' alt='Halfoween' className="EM-map" />
                <div>
                    <p className='EM-title'>
                        GET TICKETS TO THE ZONE: 
                    </p>
                </div>
                <div className='EM-row'>
                    <div className=''>
                        
                        <a href='https://www.eventliveus.com/purchase/event/2226102' target='_blank'>
                            <EButton className='EM-color2'>
                                GET TICKETS
                            </EButton>
                        </a>
                    </div>

                    {/* <div className='EM-col'>
                        <a href='/' target='_blank'>
                            <EButton className='EM-color2'>
                                COMING SOON
                            </EButton>
                        </a>
                    </div>

                    <div className='EM-col'>
                        <a href='/' target='_blank'>
                            <EButton className='EM-color1'>
                                    COMING SOON
                            </EButton>
                        </a>
                    </div> */}
                </div>
            </Fade>
        </div>
    )
}

export default EventsMap
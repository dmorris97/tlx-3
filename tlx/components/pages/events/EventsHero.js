import React from 'react'
import Fade from 'react-reveal/Fade';
import EButton from './EButton';

const EventsHero = () => {
    return (
        <div className='EH-container'>
            <Fade bottom>
                <img src='/images/HalfoweenWebpageBanner.png' alt='Halfoween' className="EH-banner" />
                <a href='https://www.eventliveus.com/purchase/event/2226102' target='_blank'>
                    <EButton className='EH-color'>
                        GET TICKETS
                    </EButton>
                </a>
            </Fade>
        </div>
    )
}

export default EventsHero
import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade';

const HomeAbout = () => {
    
    const parallax = React.useRef(null);
    React.useEffect(() => {
        function scrollHandler() {
            const element = parallax.current;
            if (element && window.innerWidth > 600) {
                let offset = window.pageYOffset;
                if (window.innerWidth > 768){
                    element.style.backgroundPositionY = offset * -0.25 + 'px'; //.12
                } else {
                    element.style.backgroundPositionY = offset * -0.12 + 'px';
                }
            }
        }
        window.addEventListener('scroll', scrollHandler)
        
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);
    return (
        <div className='ha-container ' ref={parallax}>
            <Fade bottom>
                <h1 className='ha-header'>
                    TwistedLogix
                </h1>
            
            
                <p className='ha-content ha-content-border'>
                    Welcome to the TwistedLogix Collective, a place for musicians & fans to build musical connections onstage & in the studio. We curate, engineer, & produce music-centric content designed to connect cast, crew, & audience across the digital distance. Be you the artist or fan, TLX is your home for hand-crafted concerts, virtual livestreams, music studio sessions, behind-the-scenes experiences, & so much more! #SpanTheDistance
                </p>
            </Fade>
            
           <div className='ha-layer' />
        </div>
        
    )
}

export default HomeAbout

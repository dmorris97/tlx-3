import React from 'react'
import Fade from 'react-reveal/Fade';

function EventsVideo() {
    const parallax = React.useRef(null);

    React.useEffect(() => {
        function scrollHandler() {
        const element = parallax.current;
        if (element && window.innerWidth > 768) {
            let offset = window.pageYOffset;
                element.style.backgroundPositionY = offset * -0.18 + 'px';
        }
       
        }
        window.addEventListener('scroll', scrollHandler)
        
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []); 
    // ref={parallax}
    return (
        <div className='EV-container' ref={parallax}> 
            <Fade bottom>
                <h1 className='EV-header'>
                    Halfoween - Rave & Revelry
                </h1>
            
                <div>
                    <iframe id="ytplayer" type="text/html" className="EV-video"
                    src="https://www.youtube.com/embed/VH2ZMnBHFo0?autoplay=0&modestbrowsing=1&controls=0&modestbranding=1"
                    //src="https://www.youtube.com/embed/videoseries?list=PL-vjEVIdbptu-7nFucvl6RxpBoembR-kV?modestbrowsing=1&controls=0&modestbranding=1"
                    frameborder="0"
                    //allow="autoplay; encrypted-media"
                    >
                    </iframe>
                </div>
            </Fade>
            
           {/* <div className='hv-layer' /> */}
        </div>
        
    )
}

export default EventsVideo
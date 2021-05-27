import React from 'react'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'

const HomeLanding = () => {
    const parallax = React.useRef(null);
    React.useEffect(() => {
        function scrollHandler() {
          const element = parallax.current;
          if (element) {
              let offset = window.pageYOffset;
              if (window.innerWidth > 600) {
                element.style.backgroundPositionY = (offset) * -0.40 + 'px'; //.12
              }// else {
              //   element.style.backgroundPositionY = offset * -.30 + 'px';
              // }
          }
        }
        window.addEventListener('scroll', scrollHandler)
        // return the function to remove the handler
        // which will be run whn Hero is unmounted
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className = "HeroL-container">
            <Zoom top>
                <div className='HeroL-row'>
                    <img src='/images/WebsiteLandingPoster.png' alt='TwistedLogix-Halfoween' className="HeroL-banner" />
                </div>
                <div className='HeroL-row'>
                        <a href='https://www.eventliveus.com/purchase/event/2226102' target='_blank'>
                            <button className='HeroL-col HeroL-button1'>
                                GET TICKETS
                            </button>
                        </a>
                        <Link href='/halfoween'>
                            <button className='HeroL-col HeroL-button2'>
                                LEARN MORE
                            </button>
                        </Link>
                </div>  
            </Zoom>
        </div>
    )
}

export default HomeLanding

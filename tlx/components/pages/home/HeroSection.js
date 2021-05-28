import React from 'react';
import Roll from 'react-reveal/Roll';


const  HeroSection = () => {
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
    <div className='hero-container' ref={parallax}>
      <Roll left>  
      <img src='/images/logo-grunge-orbital.png' alt='TLX' className="home-logo"/>
      </Roll>
      
      <Roll bottom>
        <h1 className='hs-title'>TwistedLogix</h1>
      </Roll>
      <div className='hs-layer'/>
    </div>
  );
}

export default HeroSection;
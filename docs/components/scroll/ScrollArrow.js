import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (typeof window !== "undefined") {
        if (!showScroll && window.pageYOffset > 40){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 40){
          setShowScroll(false)
        }
      }
    };
  

  const scrollTop = () =>{
    if (typeof window !== "undefined") {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', checkScrollTop)
  }

  

  return (
    
      <FaArrowCircleUp className="scrollTop scrollTopPos" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
    
  );
}

export default ScrollArrow;
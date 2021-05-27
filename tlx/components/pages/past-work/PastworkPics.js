import React from 'react'
import Bounce from 'react-reveal/Bounce';

function PastworkPics() {
    return (
        <div className="pp-container pp-row">
            <Bounce bottom>
            <div className='pp-column'>
                
                <img src='/images/PastworkPic1.png' alt='Pastwork Pic 1' className="pp-img"/>
                
            </div>
            <div className='pp-column'>
               
                <img src='/images/PastworkPic2.png' alt='Pastwork Pic 2' className="pp-img"/>
                
            </div>
            <div className='pp-column'>
               
                <img src='/images/PastworkPic3.png' alt='Pastwork Pic 3' className="pp-img"/>
                
            </div>
            </Bounce>
        </div>
    )
}

export default PastworkPics

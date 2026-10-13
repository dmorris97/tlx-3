import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

const AboutProfiles = () => {
    return (
        <div className='AP-container'>
            <Fade bottom>
            <h1 className='AP-title'>
                -Click or Tap on Our Photos for More About Us-
            </h1>
            </Fade>
            <Fade bottom>
            <div className='AP-row'>
                <div className='AP-column'>
                    <Link href='/taylor' className="AP-link">
                        <div className='AP-card1'>
                            <img src='/images/Taylor.jpeg' 
                                alt='Taylor' 
                                className="AP-img"/>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-title'>
                                CEO  
                                <br></br>/\ Creative Director
                            </p>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-name'>
                                Taylor
                            </p>
                            <p>
                                <br></br>
                                <br></br>
                            </p>
                            <p className='AP-card-desc'>
                                Queen of TLX
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='AP-column'>
                    <Link href='/bj' className="AP-link">
                        <div className='AP-card2'>
                            <img src='/images/Bj.jpeg' 
                                alt='BJ' 
                                className="AP-img"/>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-title'>
                                CTO  
                                <br></br>/\ Production Manager
                            </p>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-name'>
                                BJ
                            </p>
                            <p>
                                <br></br>
                                <br></br>
                            </p>
                            <p className='AP-card-desc'>
                                Production Wizard
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="AP-column">
                    <Link href='/chelsea' className="AP-link">
                        <div className='AP-card3'>
                            <img src='/images/Chelsea.jpeg' 
                                alt='Chelsea' 
                                className="AP-img"/>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-title'>
                                CFO
                                <br></br>/\ Business Manager 
                            </p>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-name'>
                                Chelsea
                            </p>
                            <p>
                                <br></br>
                                <br></br>
                            </p>
                            <p className='AP-card-desc'>
                                Lord of Operations
                            </p>
                        </div>
                    </Link>
                </div>
                <div className='AP-column'>
                    <Link href='/david' className="AP-link">
                        <div className='AP-card4'>
                            <img src='/images/David.jpeg' 
                                alt='David' 
                                className="AP-img"/>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-title'>
                            Software 
                            <br></br>& Website Developer 
                            </p>
                            <p>
                                <br></br>
                            </p>
                            <p className='AP-card-name'>
                                David
                            </p>
                            <p>
                                <br></br>
                                <br></br>
                            </p>
                            <p className='AP-card-desc'>
                                Resident A.I.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default AboutProfiles
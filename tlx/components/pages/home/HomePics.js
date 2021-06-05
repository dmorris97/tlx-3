import React from 'react'
import Link from "next/link"
import Fade from 'react-reveal/Fade';

const HomePics = () => {
    return (
        <div className="hp-container hp-row">
            <Fade bottom>
            <div className='hp-column1'>
                <h3 className='hp-heading'>
                    <Link href='/' >
                        <a className='hp-a'>
                            Coming Soon
                        </a>
                    </Link>
                </h3>
                <Link href='/' className='hp-a'>
                <img src='/images/hp-live-event.jpg' alt='Event' className="hp-img"/>
                </Link>
            </div>
            <div className='hp-column2'>
                <h3 className='hp-heading'>
                    <Link href='/past-work' className='hp-a'>
                        <a className='hp-a'>
                            Past Videos
                        </a>
                    </Link>
                </h3>
                <Link href='/past-work' className='hp-a'>
                <img src='/images/hp-past-videos.jpg' alt='Past Videos' className="hp-img"/>
                </Link>
            </div>
            </Fade>
        </div>
    )
}

export default HomePics

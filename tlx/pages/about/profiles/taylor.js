import React from 'react'
import Fade from 'react-reveal/Fade';
import ProfileHero from './ProfileHero'

function Taylor() {
    return (
        <div>
            <ProfileHero />
            <div className='T-container'>
            <Fade bottom>
                <div className='T-card'>
                    <div className="T-column left">   
                        <img src='/images/Taylor.jpeg' 
                        alt='Taylor' 
                        className="card-img"/>
                        <h1 className='T-title'>Taylor Morris Ramone</h1>
                        <p className='card-role'>
                        CEO /\ Executive Director
                        </p>
                    </div> 
                    <div className='T-column right'>
                    <p className='card-text'>
                        Taylor Morris-Ramone grew up as a child of the 
                        music industry. She has been involved in her 
                        family’s recording studio, Morrisound Recording, 
                        for most of her life, assisting on installations 
                        and maintenance of large and small scale audio 
                        equipment, in-session operations, backing vocals, 
                        client relations and branding, and most recently 
                        the construction of their newest studio facility 
                        on the edge of Seminole Heights in Tampa. After 
                        earning her International Baccalaureate diploma 
                        in high school, her audio lifelong passion motivated 
                        her to pursue her Bachelor of Science degree in 
                        Electrical Engineering. She graduated from the 
                        University of South Florida in 2014, having focused 
                        her undergraduate engineering studies on audio 
                        processing and electronics, while interning with 
                        electronics manufacturer Vintech Audio and working 
                        part time at Sam Ash music and Morrisound. <br/> 
                        Upon graduation, she wished to broaden her professional 
                        horizons and launched an early career in broadcast 
                        measurement, accepting a corporate job with the Nielsen 
                        Company as their R&D audio engineer. During the five 
                        years she worked with Nielsen, she designed, built, and 
                        managed Nielsen’s Global Engineering Audio Lab, 
                        revolutionizing the company’s audio testing processes 
                        and capacities. She led a critical listening algorithm 
                        evaluation team of 10+ members, built up a partnership 
                        with Dolby Laboratories in the NextGenTV Tech space, and 
                        assisted in the redesign, construction, and operation of 
                        five other engineering labs. Meanwhile, she performed 100+ 
                        demonstrations of Nielsen Engineering labs’ capabilities 
                        to national and international groups, volunteered 
                        instructionally in 10+ STEM-centric youth outreach 
                        initiatives, and created 5+ technology promotional videos. 
                        In April of 2019, she departed from her position at Nielsen 
                        to co-found TwistedLogix LLC, a multimedia and livestream 
                        production company focused on the pristine audio capture 
                        and emotional delivery of live performances, alongside her 
                        husband, BJ Ramone. <br/> Presently, Taylor is working full time in 
                        her role as Executive Director for her company while studying 
                        for her MS degree in 
                        Entrepreneurship in Applied Technologies at USF, with the 
                        goal to more smartly stand up TwistedLogix as a successful 
                        legacy company. Taylor enjoys spending her “free” time with 
                        her family and friends attending concerts and festivals, 
                        hunting down Tampa Bay’s latest in craft brew releases, singing 
                        in cover bands, and obsessively riding Florida’s plethora of 
                        thrill rides and attractions. 
                        </p>
                    </div>
                </div>
                </Fade>
            </div>
            
        </div>
    )
}

export default Taylor

import React from 'react'
import Fade from 'react-reveal/Fade';

import Accordion from './Accordion'

const WWOAccordion = () => {
    
    return (
        <div className='WWOA-container'>
            <Fade bottom>
            <h2 className='WWOA-top-text'>
            We offer fully customized content production services for your musical performances on the stage and in the studio. From video content creation to distribution services; we tailor all of our packages to each production's unique needs.
            </h2>
            </Fade>
            
            
            <div className='WWOA-row bordWWO'>
                <Fade bottom>
                <div className='columnWWOleft WWOA-pad1'>
                    <h1 className='WWOA-col-title'>End-to-End Content Services</h1>
                    <p className="WWOA-col-text">
                        livestream concerts   |   drive-in concerts  |  recording studio filming & photography   |   VIP studio watch parties  |  behind-the-scenes videos & shorts  |   song lyric videos  |  promotional videos   |   performance videos  |  feature length concert videos  |  concert recasts
                    </p>
                </div>
                </Fade>
                <Fade bottom>
                <div className='columnWWOright WWOA-pad1'>
                <h1 className='WWOA-col-title'>A-La-Carte Technical Services</h1>
                
                    
                    <Accordion
                    title="Multi-Camera Filming & Livestreaming"
                    content="Our video team is there to capture each moving moment of your gig across multiple cameras all night, livestreaming in 1080p or filming in 4K UHD. Whether you are performing at your favorite venue, or filming your recording sessions, we can help immortalize your show. (Also offering session and concert photography)"
                    />
                    <Accordion
                    title="Video Editing, Graphics, & Post Production"
                    content="Our team of editors will transform your band’s raw photo and video content into something even more spectacular. From song performance videos and promotional reels, to lyric videos and full length concert features, we will distill the most potent moments of your show to give you powerful videos that tell your story with feeling. "
                    />
                    <Accordion
                    title="Sound Design, Recording, Mixing & Mastering"
                    content="Beautiful sound is our top priority in every project. Our audio team can record your performance anywhere you play, crafting each sonic element of your performance in high fidelity (stereo or 5.1 surround) out of legendary Morrisound Recording studios. (Also offering live mixing services for FOH and live streaming)"
                    />
                    <Accordion
                    title="Consultation Services"
                    content="Overwhelmed trying to learn how to set up your own livestream system? Need to build a sound studio or stage? TLX can help! Our engineers will work with you to design a system that best balances your production and budget needs."
                    />
                    
                </div>
                </Fade>
            </div>
            <Fade bottom>
            <h1 className='WHOA-end'>Contact us today - let's make something epic!</h1>
            </Fade>
        </div>
    )
}

export default WWOAccordion
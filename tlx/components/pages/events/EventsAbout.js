import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const EventsAbout = () => {
    return (
        <div className='EA-container'>
            <Fade bottom>
            <p className="EA-text">
                You made it halfway to Halloween...
            </p>
            <h1 className='EA-title'>
                Celebrate at Halfoween: Rave & Revelry ‘21!
            </h1>
            <p className='EA-text'>
                Join TwistedLogix at Raymond James for a reimagined dark concert experience; a hybrid arts festival designed to reconnect our rave family with a distanced drive-in option. You and your crew are welcomed to the Spooky Village, a Halfoween-curated arts market featuring local vendors and food trucks. Choose your level of physical distancing; drive up with your crew to a private VIP or GA+ parking zone near the stage, or walk up to the Wylds join the masked party for dark electronic music performances headlined by Madeaux and supported by DJ IVNX.                 
                {/* <br/> */}
                {/* <br/>
                Let your spooky flag fly and decorate your car zone for the Car Costume Challenge! The winning car group will be welcomed on stage with Madeaux for his last song and a photo opp. Proceeds from the Car Costume Challenge entrance ticket ($25) will benefit the Gasparilla Music Festival’s Recycled Tunes program, whose mission is to enrich the lives of underserved and impoverished children in Tampa Bay by ensuring access to musical instruments. They will also be on site collecting your broken and busted instruments for donation to the cause! */}
                <br/>
                <br/>
                Gates open at 4p, the Car Costume Challenge finalists are featured at 7:30p (last submissions by 6:30p), IVNX kicks things off at 8p, and Madeaux takes the stage at 9p. Come out for a spooky night of Revelry and reunite with your distanced Tampa rave fam!            </p>
            <br/>
            <br/>
            <br/>
            <h1 className='EA-title'>
                Note on Safety Rules: 
            </h1>
            <ul className='EA-bullet'>
                <li className='EA-list-item'>All guests will be non-contact temperature scanned before entry.</li> 
                <li className='EA-list-item'>You are welcome to relax your mask usage if inside a private car zone, but all guests must wear their masks at all times in all public areas. </li>  
                {/* <li className='EA-list-item'>Absolutely no illegal substances, drugs, contraband, weapons, or outside food/drinks/alcohol are allowed onto the property. </li>   */}
                <li className='EA-list-item'>Please see <Link className='EA-text-link' href="/rules-and-regs">twistedlogix.com/rules-and-regs</Link> for additional rules and regulations.</li> 
            </ul>

            </Fade>
        </div>
    )
}

export default EventsAbout
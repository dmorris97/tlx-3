import React from 'react'
import Fade from 'react-reveal/Fade';
import ProfileHero from './ProfileHero'

const Bj = () => {
    return (
        <div>
            <ProfileHero />
            <div className='B-container'>
            <Fade bottom>
                <div className='B-card'>
                    <div className="B-column B-left">   
                        <img src='/images/Bj.jpeg' 
                        alt='Bj' 
                        className="B-card-img"/>
                        <h1 className='B-title'>BJ Ramone</h1>
                        <p className='B-card-role'>
                        CTO /\ Production Manager 
                        </p>
                    </div> 
                    <div className='B-column B-right'>
                        <p className='B-card-text'>
                            BJ Ramone grew up immersed in New York’s entertainment 
                            industry with legendary music producer Phil Ramone for 
                            a father, and actress/singer turned artist manager Karen 
                            Kamon for a mother, performing in his youth for acts 
                            such as Gloria Estefan’s Christmas studio album and on 
                            Broadway with Raffi. BJ attended the “hidden Ivy” school 
                            Skidmore College in pursuit of his Bachelor of Arts 
                            degree in Music. While there, he joined the college’s 
                            official sketch comedy group “The Sketchies”, authoring 
                            and acting in original sketches, filming, and running 
                            live audio. Throughout his studies, BJ continued to dive 
                            deeper into the music community, working positions such as 
                            foley artist and assistant audio engineer on independent 
                            film Dorian Blues, sound mixer for Rise of the Dead, music 
                            coordinator for TV movie “Kings of South Beach”, and music 
                            producer for Kaki King on the movie August Rush. <br/>
                            After graduating in 2005, BJ moved beyond film and 
                            television, apprenticing under prestigious producers such as 
                            Frank Filipetti, Elliot Scheiner, Al Schmidt, Paul O’Neill, 
                            Eric Schilling, Tom Morris, Jim Morris, and continuously with 
                            his father. Throughout these years, he honed his expertise in 
                            audio engineering, music production, vocal coaching, and band 
                            development. He has since spent his career working across 
                            dozens of major recording studios, live tours, and award 
                            shows, such as the Grammy’s, Latin Grammy’s, Songwriter’s 
                            Hall of Fame, and the Library of Congress’ Gershwin Prize 
                            Ceremony. His portfolio extends across a diverse range of 
                            musical genres, spanning artists such as Billy Joel, Elton 
                            John, Ray Charles, Chicago, Dionne Warwick, George Michael, 
                            Rod Stewart, Plies, Savatage, Iced Earth, and Trans-Siberian 
                            Orchestra. <br/>
                            In 2019, BJ co-founded TwistedLogix Productions, Tampa Bay’s 
                            premiere livestream and multimedia services company, with his 
                            wife and partner Taylor. When BJ is not in the studio or out 
                            on tour, he loves keeping up with the latest technologies, 
                            rocking out at local shows, exploring theme parks, and being 
                            a bit of a foodie trying out new restaurants and breweries 
                            with his friends and family.
                        </p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Bj

import React from 'react'
import Fade from 'react-reveal/Fade';
import ProfileHero from './ProfileHero'

const Chelsea = () => {
    return (
        <div>
            <ProfileHero />
            <div className='C-container'>
            <Fade bottom>
                <div className='C-card'>
                    <div className="C-column left">   
                        <img src='/images/Chelsea.jpeg' 
                        alt='Chelsea' 
                        className="card-img"/>
                        <h1 className='C-title'>Chelsea Wilkinson</h1>
                        <p className='card-role'>
                        CFO /\ Business Manager 
                        </p>
                    </div> 
                    <div className='C-column right'>
                        <p className='card-text'>
                        Chelsea Wilkinson has found a common purpose in TwistedLogix with a group of talented professionals that are dedicated to making the world a better place through sound and advancing audio technology into the future. Her commitment to research and technology began at the University of Florida, where she graduated with a Bachelor of Arts degree in Literature. She was involved in research for the NIH in the Center of Emotion and Attention in Cognitive Science, the Pharmacodynamics Lab at the College of Pharmacy, as well as the Entomology Department where she worked on large scale plant pathology trials. <br/>
                        Upon graduation, she began working in the business strategy and marketing division of a biotech startup in an incubator in Gainesville, FL. Since that time she has been involved in just about every aspect of the business side of the startup and biotech world including budgeting, negotiating, business plan development, regulatory oversight, and trial development. She is currently invested in her own immunotherapy research projects, and runs a consulting company working with small companies to move them from concept to market and focused, but not limited to, clinical research. <br/>
                        She currently resides in New York City and negotiates budgets for the Columbia University clinical trials office for industry sponsored clinical trials. Chelsea negotiates directly with emerging companies, established players, and third party professional negotiators alike, and she specializes in finding solutions that benefit all stakeholders.  She is pursuing her Masters in Management online. <br/>
                        In her spare time, Chelsea likes adventuring in Central Park with her Scottish terrier, Lola, spending time with family, and traveling. <br/>
                        </p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Chelsea

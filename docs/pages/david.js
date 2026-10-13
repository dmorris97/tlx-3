import React from 'react'
import Fade from 'react-reveal/Fade';
import ProfileHero from '../components/pages/about/profiles/ProfileHero'

function David() {
    return (
        <div>
            <ProfileHero />
            <div className='D-container'>
            <Fade bottom>
                <div className='D-card'>
                    <div className="D-column left">   
                        <img src='/images/David.jpeg' 
                        alt='David' 
                        className="card-img"/>
                        <h1 className='D-title'>David Morris</h1>
                        <p className='card-role'>
                        Software & Website Developer 
                        </p>
                    </div> 
                    <div className='D-column right'>
                    <p className='card-text'>
                        “You may ask ‘Is he really the type of person to quote 
                        himself in his own bio?’ The answer, of course, is 
                        obvious.”
                        -David H. Morris, 2020
                        <br></br>
                        <br></br>
                        Being the descendant of a long lineage of musicians 
                        and engineers, David Morris predictably finds 
                        himself between the two worlds. With most of his 
                        family and friends being musicians, David, who can’t 
                        even read sheet music, excels at being a poser. As a 
                        computer science student at the University of 
                        South Florida, David has an undeniable passion for 
                        technology. After bouncing between hardware and 
                        software, David landed in the field of website 
                        development. Although he is still a young padawan 
                        learner, David rises to meet each new challenge, and 
                        grows more with every project. <br/> With an English teacher 
                        and an electrical engineer turned record producer for 
                        parents, he grew up with exposure to a wide range 
                        of subjects. After graduating from the International 
                        Baccalaureate program in highschool, David began 
                        studying business at his current university. Two 
                        years later, the shock in people's voices upon 
                        hearing David's decision to switch from business 
                        to computer science reverberated like a quiet 
                        whisper into a pillow. Outside of school and web 
                        development, he spends his time listening to a wide 
                        variety of music, creating and planning fantasy / 
                        sci-fi stories, researching seemingly random topics, 
                        and other introverted hobbies that slowly are 
                        removing his sanity. In a conversation, anything 
                        weird or nerdy is welcome. He finds nothing more 
                        interesting than a person talking about their 
                        passion, and if you can teach him something new 
                        that’s even better.
                        <br></br>
                        “It’s ok to start from nothing, and it's ok to fail 
                        when learning. Just remember to be charitable to 
                        yourself because you'll never stop learning.” 
                        -A guy writing his own bio, 2020 
                        </p>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default David

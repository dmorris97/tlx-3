import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {signOutUserStart} from './../redux/User/user.actions'
import {Link} from 'react-router-dom'
import Logo from '/images/logo-grunge-orbital.png'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})



const Navbar = (props) => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(mapState)

    const signOut = () => {
        dispatch(signOutUserStart())
    }

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect (() => {
        showButton()
    }, []);
  

    window.addEventListener('resize', showButton);

    const changebackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changebackground);
    
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="" onClick={closeMobileMenu}>
                        <img src={Logo} alt='TLX' className='navbar-img'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link to='/live-event' className="nav-links" onClick={closeMobileMenu}>
                                LIVE EVENT
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to='/halfoween' className="nav-links" onClick={closeMobileMenu}>
                                HALFOWEEN
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/past-work' className="nav-links" onClick={closeMobileMenu}>
                                PAST WORK
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/what-we-offer' className="nav-links" onClick={closeMobileMenu}>
                                WHAT WE OFFER
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/day-in-the-life' className="nav-links" onClick={closeMobileMenu}>
                                DAY IN THE LIFE
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a target="_blank" 
                                href="https://twistedlogix-twisted-merch.myshopify.com/" 
                                className='nav-links'
                            >
                                    MERCHANDISE
                            </a>
                        </li>
                    </ul>
                    {/* <ul>
                        <li className="button-menu" >
                            
                                <ScrollLink className="" to="Home-contact" spy={true} smooth={true} duration={500}>
                                    <EButton>CONTACT US</EButton>
                                </ScrollLink>
                            
                        </li>
                    </ul> */}
                </div>
            </nav>
        </>
    )
}

Navbar.defaultProps = {
    currentUser: null
};


export default Navbar


// {currentUser && (
//     <ul>
//         <li className="button-menu" onClick={() => signOut()}>
//             {button && <Button buttonStyle="btn--outline">SIGN-OUT</Button>}
//         </li>
//     </ul>
// )}
// {!currentUser && (
//     <ul>
//         <li className="button-menu">
//             {button && <Button buttonStyle="btn--outline">SIGN-IN</Button>}
//         </li> 
//     </ul>
// )}
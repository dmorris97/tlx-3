import React, {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {signOutUserStart} from '../redux/User/user.actions'
import Link from 'next/link'

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


    if (typeof window !== "undefined") {

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
    }

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link href="/" className="" onClick={closeMobileMenu}>
                        <img src='/images/logo-grunge-orbital.png' alt='TLX' className='navbar-img'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link href='/' onClick={closeMobileMenu}>
                                <a className="nav-links">
                                    HOME
                                </a>
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link to='/live-event' className="nav-links" onClick={closeMobileMenu}>
                                LIVE EVENT
                            </Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link href='/events' onClick={closeMobileMenu}>
                                <a className="nav-links">
                                    EVENTS
                                </a>
                            </Link>
                        </li> */}

                        <li className="nav-item">
                            <Link href='/past-work' onClick={closeMobileMenu}>
                                <a className="nav-links">
                                    PAST WORK
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href='/what-we-offer' onClick={closeMobileMenu}>
                                <a className="nav-links">
                                    WHAT WE OFFER
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href='/day-in-the-life' onClick={closeMobileMenu}>
                                <a className="nav-links">
                                    DAY IN THE LIFE
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href='/about' onClick={closeMobileMenu}>
                                <a className="nav-links">
                                    ABOUT
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <a target="_blank" 
                                href="https://twistedlogix-twisted-merch.myshopify.com/" 
                                className='nav-links'>
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
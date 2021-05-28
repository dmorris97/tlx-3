import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {signOutUserStart} from '../redux/User/user.actions'
import Link from 'next/link';

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

const Footer = props => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(mapState)

  const signOut = () => {
      dispatch(signOutUserStart())
  }

  return (
    <div className='footer-container'>
      
      
      <div class="footer-video-background">
        <div class="footer-video-foreground">
          <iframe src="https://www.youtube.com/embed/55wlvdyc-C0?controls=0&autohide=1&showinfo=0&rel=0&autoplay=1&mute=1&playlist=55wlvdyc-C0&loop=1" 
          frameborder="0" allowfullscreen></iframe>
        </div>
        
      </div>
      
        <h3 className='footer-heading'>
          TwistedLogix
        </h3>
      <div className='social-media'>
        <div className='social-icons'>
            
              <a target="_blank" href="https://www.facebook.com/twistedlogixofficial/" className="social-icon-link facebook">
                <i className='fab fa-facebook-f' />
              </a>

              <a target="_blank" href="https://www.instagram.com/twistedlogixofficial/" className="social-icon-link instagram">
                <i className='fab fa-instagram' />
              </a>

            {/* <Link
              className='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link> */}
            
              <a target="_blank" href="https://www.linkedin.com/company/twistedlogix/" className="social-icon-link linkedin">
                <i className='fab fa-linkedin' />
              </a>
            
          </div>
        </div>
      <div className='footer-links'>
        <ul className='footer-link-wrapper'>
          <li className='footer-link-items'>
            <Link className='footer-font' href='/'>Privacy policy</Link>
          </li>
          <li className='footer-link-items'>
            <Link className='footer-font' href='/'>Terms and conditions</Link>
          </li>
          <li className='footer-link-items'>
            <Link className='footer-font' href=''>Contact</Link>
          </li>
          {currentUser && (
            <ul>
                <li className="footer-link-items">
                    <Link className='footer-font' onClick={() => signOut()}>Sign-Out</Link>
                </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
                <li className="footer-link-items">
                    <Link className='footer-font' href='/sign-in'>Sign-In</Link>
                </li>
            </ul>
          )}
        </ul>
      </div>
        <div className='wr-z'>
          <small className='website-rights'>
              © Copyright 2021 TwistedLogix LLC. - All Rights Reserved
              </small>
          
        </div>
        
    </div>
  );
}

export default Footer;


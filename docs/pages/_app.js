import React, {useEffect} from 'react';
import Head from 'next/head'
import {Provider, useDispatch} from 'react-redux'
import store from '../components/redux/createStore'

import '../styles/globals.css'

//Navbar Styles
import '../styles/nav/Navbar.css'

//Home Page Styles
import '../styles/home/HomeLanding.css'
import '../styles/home/HeroSection.css'
import '../styles/home/HomePics.css'
import '../styles/home/HomeAbout.css'
import '../styles/home/HomeForm.css'

//Events Page Styles
import '../styles/events/RulesandRegs/RRHero.css'
import '../styles/events/RulesandRegs/RRRules.css'
import '../styles/events/EButton.css'
import '../styles/events/EventsAbout.css'
import '../styles/events/EventsHero.css'
import '../styles/events/EventsMap.css'
import '../styles/events/EventsNav.css'
import '../styles/events/EventsVideo.css'

//Past-work Page Styles
import '../styles/past-work/PastworkHero.css'
import '../styles/past-work/PastworkPics.css'
import '../styles/past-work/PastworkVideos.css'

//What-we-offer Page Styles
import '../styles/what-we-offer/WWOHero.css'
import '../styles/what-we-offer/WWOButton.css'
import '../styles/what-we-offer/WWOAccordion.css'
import '../styles/what-we-offer/Accordion.css'

//Day-in-the-life Page Styles
import '../styles/day-in-the-life/DITLHero.css'
import '../styles/day-in-the-life/DITLPosts.css'

//About Page Styles
import '../styles/about/AboutHero.css'
import '../styles/about/AboutInfo.css'
import '../styles/about/AboutProfiles.css'

//Profile Page Styles
import '../styles/about/profiles/ProfileHero.css'
import '../styles/about/profiles/BJ.css'
import '../styles/about/profiles/Chelsea.css'
import '../styles/about/profiles/David.css'
import '../styles/about/profiles/Taylor.css'

//SignIn Styles
import '../styles/sign-in/EmailPassword/EmailPassword.css'
import '../styles/sign-in/form/FormIn.css'
import '../styles/sign-in/form/FormSelect.css'
import '../styles/sign-in/Login.css'
import '../styles/sign-in/SIButton.css'
import '../styles/sign-in/SignIn.css'
import '../styles/sign-in/SignUp.css'

//Admin Styles
import '../styles/admin/Admin.css'
import '../styles/admin/AdminDITL.css'
import '../styles/admin/AdminLE.css'
import '../styles/admin/AdminPW.css'

//Result Styles
import '../styles/results/VideoResults/VideoResults.css'
import '../styles/results/StreamResults/StreamResults.css'
import '../styles/results/PostResults/PostAccordion.css'
import '../styles/results/PostResults/PostResults.css'

//Auth Styles
import '../styles/auth/admin-toolbar/AdminToolbar.css'
import '../styles/auth/layouts/AdminLayout.css'
import '../styles/auth/layouts/VerticalNav.css'
import '../styles/auth/modal/Modal.css'
import '../styles/auth/wrapper/AuthWrapper.css'
import '../styles/auth/user-profile/UserProfile.css'

//Scroll Styles
import '../styles/scroll/ScrollArrow.css'

//Footer Styles
import '../styles/footer/Footer.css'

//Redux Imports
import {checkUserSession} from '../components/redux/User/user.actions'

//Navbar Componants
import Navbar from '../components/nav/Navbar'

//Scroll Componants
import ScrollToTop from '../components/scroll/ScrollToTop'
import ScrollArrow from '../components/scroll/ScrollArrow'

//Footer Componants
import Footer from '../components/footer/Footer'
import AdminToolbar from '../components/pages/admin/admin-toolbar/AdminToolbar'


const AppWrap = ({ Component, pageProps }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())    

  }, [])

  return (
    <div>
      <ScrollToTop>
        <AdminToolbar />
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
        <ScrollArrow />
      </ScrollToTop>
    </div>
  )
}

const MyApp = ({ Component, pageProps }) => {
  const passing = {Component, pageProps}

  return( 
  <div>
    <Head>
      <title>TwistedLogix</title>
      <meta name="description" content="TwistedLogix Production" />
      <link rel="icon" href="/images/logo-grunge-orbital.png" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ST9QNJD7WF"></script>
      <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
        
              gtag('config', 'G-ST9QNJD7WF');
          `,
            }}
      />

    </Head>
    <Provider store={store}>
      <AppWrap {...passing} />
    </Provider>
  </div>
  )
}

export default MyApp

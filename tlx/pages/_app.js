import Head from 'next/head'
import {Provider} from 'react-redux'
import store from '../components/redux/createStore'

import Navbar from './nav/Navbar'

import '../styles/globals.css'
//Navbar Styles
import '../styles/nav/Navbar.css'

//Home Page Styles
import '../styles/home/HomeLanding.css'
import '../styles/home/HomePics.css'
import '../styles/home/HomeAbout.css'
import '../styles/home/HomeForm.css'

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

const MyApp = ({ Component, pageProps }) => {
  return( 
  <div>
    <Head>
      <title>TwistedLogix</title>
      <meta name="description" content="TwistedLogix Production" />
      <link rel="icon" href="/images/logo-grunge-orbital.png" />
    </Head>
    <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
    </Provider>
  </div>
  )
}

export default MyApp

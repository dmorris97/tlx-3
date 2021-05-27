import React from 'react'

// import HeroSection from './HeroSection'
import HomeAbout from '../components/pages/home/HomeAbout'
// import HomeContact from './HomeContact'
import HomeForm from '../components/pages/home/HomeForm';
import HomeLanding from '../components/pages/home/HomeLanding';
import HomePics from '../components/pages/home/HomePics'
// import HomeVideo from './HomeVideo';

const Home = () => {
  return (
    <div>
      <HomeLanding />
      {/* <HeroSection /> */}
      {/* <HomeVideo /> */}
      <HomePics />
      <HomeAbout />
      
      {/* <HomeContact /> */}
      <div id="Home-contact">
          <HomeForm />
      </div>
    </div>
  )
}

export default Home

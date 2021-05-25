import React from 'react'

// import HeroSection from './HeroSection'
import HomeAbout from './home/HomeAbout'
// import HomeContact from './HomeContact'
import HomeForm from './home/HomeForm';
import HomeLanding from './home/HomeLanding';
import HomePics from './home/HomePics'
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

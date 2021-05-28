import React from 'react'
import HeroSection from '../components/pages/home/HeroSection';
import HomeAbout from '../components/pages/home/HomeAbout'
import HomeForm from '../components/pages/home/HomeForm';
import HomeLanding from '../components/pages/home/HomeLanding';
import HomePics from '../components/pages/home/HomePics'

const Home = () => {
  return (
    <div>
      {/* <HomeLanding /> */}
      <HeroSection />
      <HomePics />
      <HomeAbout />

      <div id="Home-contact">
          <HomeForm />
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import Landing from '../components/landing/herosection/Landing'
import AboutTheExtension from '../components/landing/aboutExtenstion/AboutTheExtension'
import BrandBelt from '../components/landing/wordBelt/BrandBelt'
import Working from '../components/landing/howitworks/Working'

const Home = () => {
  return (
    <div>
      <Landing/>
      <BrandBelt/>
      <AboutTheExtension/>
      <Working/>
    </div>
  )
}

export default Home
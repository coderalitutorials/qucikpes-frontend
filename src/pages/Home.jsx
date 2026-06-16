








import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import IronServices from '../components/IronServices'
import IronFeatures from '../components/IronFeatures'
import IronCallback from '../components/IronCallback'
import CertifiedLogosSection from '../components/CertifiedLogosSection'
import PesSaveFeatureSection from '../components/PesSaveFeatureSection'
import PesSaveWhyChooseUs from '../components/PesSaveWhyChooseUs'
import Homeabout from '../components/Homeabout'
import TestimonialSection from '../components/TestimonialSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Homeabout/>
       <IronCallback/>
    
       <StatsSection/>
         <IronServices/>
            <TestimonialSection/>
            <CTASection/>
         {/* <PesSaveFeatureSection/>
         <PesSaveWhyChooseUs/> */}
      
    
      {/* <IronFeatures/> */}
     
    </div>
  )
}

export default Home
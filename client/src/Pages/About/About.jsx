import React from 'react'
// import Herosection from './herocomponents/Herosection'
import Advisors from '../Home/herocomponents/Advisors'
import Herosection from '../Home/herocomponents/Herosection'
import OurTeam from '../Home/herocomponents/OurTeam'
// import AboutHero from './AboutHero'
import Testimonial from './Testimonial'
import Testimonials from './Testimonials'

export default function About() {
  return (
    <div>
        <Herosection/>
        {/* <AboutHero/> */}
        <OurTeam/>
        <Advisors/>
        {/* <Testimonials/> */}
        <Testimonial/>
    </div>
  )
}

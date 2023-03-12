import React from 'react'
import Consulting from './Consulting.jsx'
import Incubation from './Incubation.jsx'
import Services from './Services.jsx'
export default function OurOfferings() {
  return (
    <div>
      <div className="zl-hero-content">
        <div className="zl-hero-container">
          <div className="zl-hero-video" style={{opacity: 1}}>
            <video preload="auto" autoPlay loop muted playsInline>
              <source src="./images/2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="zl-hero-header -rb">
            <h1 style={{willChange: 'auto', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>MII Foundation offers two main services</h1>
          </div>
          <div className="zl-hero-description">
            <p style={{}}> Incubation and Consulting - to help start-ups grow and succeed.</p>
          </div>
          {/* <div className="zl-hero-down" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
            <svg className="zl-svgsprite -arrow-down-o">
              <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-down-o" />
            </svg>
          </div> */}
        </div>
      </div>
      {/* <Services/> */}
      
      <Incubation/>
      <Consulting/>
<hr/>
      <h1 style={{padding:"30px",textAlign:"center"}}>"Choose MII Foundation to help bring your entrepreneurial vision to life. Get the support you need to grow your business and succeed."</h1>
    </div>
  )
}

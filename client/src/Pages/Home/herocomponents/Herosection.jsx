import React from "react";
import './herosection.css'
export default function Herosection() {
  return (
    <div className="herosection" id="hero">

      <div className="logovidcon">
        
        <div className="logo">
        <h1>About</h1>
        <h1>US</h1>
        </div> 
        <video  id="vid" preload="auto" autoPlay loop muted playsInline>
          <source src="./images/1.mp4" type="video/mp4" />
        </video>

        <div className="logo1">
          <h1 className="titleofmmii">"Create a perfect ecosystem for your business"</h1>

        </div>
      </div>


      {/* <div className="zl-hero-container">
        <div className="zl-hero-video -top" style={{ opacity: 1}}>
          <div className="zl-hero-logo" style={{display:"block",top:'40%'  }}>
          <h1>MII</h1>
            <h2>Foundation</h2>
             <img width={"20px"} height={"30px"} src="./images/medicaps.png" alt="ZenX Labs"  />
          </div>
          <video preload="auto" autoPlay loop muted playsInline>
            <source src="./images/1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="zl-hero-header -remain">
          <h1
            style={{
              willChange: "auto",
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            MII
          </h1>
        </div>
         <div className="zl-hero-description">
          <p style={{}}>
            MII Foundation, a Section-8 company based in India, is an incubator
            dedicated to supporting and nurturing innovative start-ups at
            Medi-Caps University in Indore. As a start-up incubator, MII
            Foundation provides a collaborative and inclusive environment for
            entrepreneurs to grow their businesses.
          </p>
        </div> 
        <div
          className="zl-hero-down"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            transform: "translate(-50%, 0%) translate(-0.33333px, 0px)",
          }}
        >
          <svg className="zl-svgsprite -arrow-down-o">
            <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-down-o" />
          </svg>
        </div>
      </div> */}
    </div>
  );
}

import React, { useEffect } from 'react'
import './animation.css'
export default function AnimationSection() {
    
  return (
    <div>
        
<section class="scroll">
  <div class="scroll__view no-skrollr" id="scrollslider" data-current="1">
    <div class="scroll__content scroll__hero is-alwayssticky">
      <div class="scroll__sectionwrapper section__hero">
        <div class="rectangles">
          <div class="rectangle rectangle-1" data-anchor-target="#scrollslider" data-0p-top="background: #B3CC35; left: 38.327%; top: 29.239%; transform: translate(-50%, -50%) rotate(-24deg);" data-_distance-top="background: #B3CC35; left: 34.398%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg);" data-_distance2-top="background: #6EA644; left: 42.4%; top: 56.9%; transform: translate(-50%, -50%) rotate(0deg);" data-_distance3-top="background: #6EA644; left: 36.5%; top: 56.8%; transform: translate(-50%, -50%) rotate(0deg);"></div>
          <div class="rectangle rectangle-2" data-anchor-target="#scrollslider" data-0p-top="background: #A4C339; left: 62.575%; top: 30.343%; transform: translate(-50%, -50%) rotate(88deg);" data-_distance-top="background: #A4C339; left: 44.698%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg);" data-_distance2-top="background: #6EA644; left: 49.9%; top: 49.3%; transform: translate(-50%, -50%) rotate(90deg);" data-_distance3-top="background: #6EA644; left: 44%; top: 49.2%; transform: translate(-50%, -50%) rotate(90deg);"></div>
          <div class="rectangle rectangle-3" data-anchor-target="#scrollslider" data-0p-top="background: #92B93D; left: 50.543%; top: 49.013%; transform: translate(-50%, -50%) rotate(32deg);" data-_distance-top="background: #92B93D; left: 54.898%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg);" data-_distance2-top="background: #6EA644; left: 57.6%; top: 56.9%; transform: translate(-50%, -50%) rotate(180deg);" data-_distance3-top="background: #6EA644; left: 55.8%; top: 56.9%; transform: translate(-50%, -50%) rotate(180deg);"></div>
          <div class="rectangle rectangle-4" data-anchor-target="#scrollslider" data-0p-top="background: #80B040; left: 44.362%; top: 70.482%; transform: translate(-50%, -50%) rotate(75deg);" data-_distance-top="background: #80B040; left: 65.298%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg);" data-_distance2-top="background: #6EA644; left: 50%; top: 64.4%; transform: translate(-50%, -50%) rotate(270deg);" data-_distance3-top="background: #6EA644; left: 44%; top: 64.5%; transform: translate(-50%, -50%) rotate(270deg);"></div>
          <div class="rectangle rectangle-5" data-anchor-target="#scrollslider" data-0p-top="background: #B3CC35; left: 38.327%; top: 29.239%; transform: translate(-50%, -50%) rotate(-24deg); opacity: 0;" data-_distance-top="background: #B3CC35; left: 34.398%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg); opacity: 0;" data-_distance2-top="background: #6EA644; left: 49.9%; top: 49.3%; transform: translate(-50%, -50%) rotate(90deg); opacity: 0;" data-_distance3-top="background: #6EA644; left: 58.4%; top: 49.2; transform: translate(-50%, -50%) rotate(90deg); opacity: 1;"></div>
          <div class="rectangle rectangle-6" data-anchor-target="#scrollslider" data-0p-top="background: #A4C339; left: 62.575%; top: 30.343%; transform: translate(-50%, -50%) rotate(88deg); opacity: 0;" data-_distance-top="background: #A4C339; left: 44.698%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg); opacity: 0;" data-_distance2-top="background: #6EA644; left: 49.9%; top: 49.3%; transform: translate(-50%, -50%) rotate(90deg); opacity: 0;" data-_distance3-top="background: #6EA644; left: 66.1%; top: 56.9%; transform: translate(-50%, -50%) rotate(180deg); opacity: 1;"></div>
          <div class="rectangle rectangle-7" data-anchor-target="#scrollslider" data-0p-top="background: #92B93D; left: 50.543%; top: 49.013%; transform: translate(-50%, -50%) rotate(32deg); opacity: 0;" data-_distance-top="background: #92B93D; left: 54.898%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg); opacity: 0;" data-_distance2-top="background: #6EA644; left: 50%; top: 64.4%; transform: translate(-50%, -50%) rotate(270deg); opacity: 0;" data-_distance3-top="background: #6EA644; left: 58.4%; top: 64.5%; transform: translate(-50%, -50%) rotate(270deg); opacity: 1;"></div>
          <div class="rectangle rectangle-8 rectangle--alt" data-anchor-target="#scrollslider" data-0p-top="background: #C1D430; left: 28.038%; top: 44.5%; transform: translate(-50%, -50%) rotate(-73deg);" data-_distance-top="background: #C1D430; left: 24.898%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg);" data-_distance2-top="background: #92B93D; left: 44.456%; top: 41.827%; transform: translate(-50%, -50%) rotate(45deg);" data-_distance3-top="background: #92B93D; left: 38.529%; top: 41.8%; transform: translate(-50%, -50%) rotate(45deg);"></div>
          <div class="rectangle rectangle-9 rectangle--alt" data-anchor-target="#scrollslider" data-0p-top="background: #6EA644; left: 70.912%; top: 59.376%; transform: translate(-50%, -50%) rotate(-207deg);" data-_distance-top="background: #6EA644; left: 74.998%; top: 50.665%; transform: translate(-50%, -50%) rotate(27deg);" data-_distance2-top="background: #92B93D; left: 55.327%; top: 41.756%; transform: translate(-50%, -50%) rotate(-45deg);" data-_distance3-top="background: #92B93D; left: 49.327%; top: 41.656%; transform: translate(-50%, -50%) rotate(-45deg);"></div>
          <div class="rectangle rectangle-10 rectangle--alt" data-anchor-target="#scrollslider" data-0p-top="background: #D0DD2C; left: 28.038%; top: 44.5%; transform: translate(-50%, -50%) rotate(-73deg) scaleY(1); opacity: 0;" data-_distance-top="background: #D0DD2C; left: 44.898%; top: 39.265%; transform: translate(-50%, -50%) rotate(27deg) scaleY(1); opacity: 0;" data-_distance2-top="background: #D0DD2C; left: 55.327%; top: 41.756%; transform: translate(-50%, -50%) rotate(-45deg) scaleY(1); opacity: 0;" data-_distance3-top="background: #D0DD2C; left: 51.698%; top: 38.149%; transform: translate(-50%, -50%) rotate(0) scaleY(.5); opacity: 1;"></div>
          <div class="rectangle rectangle-11 rectangle--alt" data-anchor-target="#scrollslider" data-0p-top="background: #92B93D; left: 70.912%; top: 59.376%; transform: translate(-50%, -50%) rotate(-207deg) scaleY(1); opacity: 0;" data-_distance-top="background: #92B93D; left: 54.998%; top: 39.265%; transform: translate(-50%, -50%) rotate(27deg) scaleY(1); opacity: 0;" data-_distance2-top="background: #92B93D; left: 55.327%; top: 41.756%; transform: translate(-50%, -50%) rotate(-45deg) scaleY(1); opacity: 0;" data-_distance3-top="background: #92B93D; left: 62%; top: 48.098%; transform: translate(-50%, -50%) rotate(90deg) scaleY(.75); opacity: 1;"></div>
        </div>
      </div>
    </div>
    <div class="scroll__overlays" id="scrolloverlays">
      <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
          <div style={{ color: "blue" }}>
                        <h1 style={{
                            fontSize: "80px",
                            // lineHeight: "80px",

                        }} >Incubation</h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>

          </div>
        </div>
      </div>
      <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
          <div style={{ color: 'purple' }}>
                        <h1 style={{
                            fontSize: "80px",
                            color: "purple"
                            // lineHeight: "80px",

                        }} >Accelaration</h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>


          </div>
        </div>
      </div>
      <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
          <div style={{ color: " #008a6e" }}>
                        <h1 style={{
                            fontSize: "80px",
                            // lineHeight: "80px",

                        }} >Adoption</h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>          </div>
        </div>
      </div>
      {/* <div class="scroll__content is-desktopsticky">
        <div class="scroll__sectionwrapper">
          <div class="scroll__text">
            <h1>Iteration</h1>
            <p>Second Text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, culpa! Labore corrupti deleniti animi velit maiores dignissimos asperiores culpa explicabo, illo dolorem! Dolor sapiente nesciunt dolorum saepe, ab fugiat ipsam? </p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
    </div>
  )
}

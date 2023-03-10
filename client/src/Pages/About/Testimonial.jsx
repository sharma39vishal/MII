import React from "react";
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div>
      <section className="zl-testimonial">
        <div className="zl-testimonial-content">
          <div className="zl-testimonial-container">
            <div className="zl-testimonial-header">
              <h2>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    willChange: "auto",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  Testimonials
                </div>
              </h2>
            </div>
            <div className="zl-testimonial-carousel swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div
                className="zl-testimonial-items"
                style={{
                  cursor: "grab",
                  transform: "translate3d(-66vw, 0vw, 0vw)",
                  transitionDuration: "0ms",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  willChange: "auto",
                  opacity: 1,
                }}
              >
                <div className="zl-testimonial-item prev-slide">
                  <div className="zl-testimonial-text">
                    <q>
                      We came to ZenX as a well-established company with a goal
                      to strengthen our presence in the blockchain field. We
                      were impressed with the level of expertise and practical
                      experience, both on technical and administrative level.
                      Dimitra is a very ambitious project - we are happy to find
                      a partner that has the knowledge and ability to support
                      our mission of solving global hunger.
                    </q>
                  </div>
                </div>
                <div className="zl-testimonial-item -active">
                  <div className="zl-testimonial-text">
                    <q>
                      ZenX focus on CeDeFi is the main reason why we chose to
                      enter the incubator. Their careful analysis of
                      legislation, time-proven approach to outlining tokenomics
                      and business models, and strong partner network really
                      stood out to us. Cooperation with centralized authorities
                      allows us to get global opportunities in data management
                      and DeFi, increase our reach, and make real impact. In
                      many ways thanks to our cooperation, Cirus was able to
                      have a very strong start, and it’s only the beginning.
                    </q>
                  </div>
                </div>
              </div>
              <div className="zl-testimonial-detail">
                <div className="zl-testimonial-detail-col -left">
                  <div className="zl-testimonial-authors">
                    <div
                      className="zl-testimonial-author"
                      style={{
                        willChange: "auto",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <div className="zl-testimonial-author-col -left">
                        <div className="zl-testimonial-avatar">
                          <img
                            src="../assets/img/testimonials/trask.jpg"
                            srcSet="../assets/img/testimonials/trask.jpg 2x"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="zl-testimonial-author-col -right">
                        <div className="zl-testimonial-name">
                          Dr Dilip K Patnaik
                        </div>
                        <div className="zl-testimonial-title">
                          Vice Chancellor
                        </div>
                      </div>
                    </div>
                    <div
                      className="zl-testimonial-author -visible"
                      style={{
                        willChange: "auto",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <div className="zl-testimonial-author-col -left">
                        <div className="zl-testimonial-avatar">
                          <img
                            src="../assets/img/testimonials/bland.jpg"
                            srcSet="../assets/img/testimonials/bland.jpg 2x"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="zl-testimonial-author-col -right">
                        <div className="zl-testimonial-name">
                          Mr Palash Garg
                        </div>
                        <div className="zl-testimonial-title">
                         OSD to Chancellor at Medi-Caps University
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="zl-testimonial-detail-col -right">
                  <div
                    className="zl-testimonial-navs"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <div className="zl-testimonial-nav -prev">
                      <button className="zl-btn zl-btn_nav">
                        {/* <svg className="zl-svgsprite -arrow-left-o">
                          <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-left-o" />
                        </svg> */}
                      </button>
                    </div>
                    <div className="zl-testimonial-nav -next">
                      <button
                        className="zl-btn zl-btn_nav swiper-button-disabled"
                        disabled="">
                        {/* <svg className="zl-svgsprite -arrow-right-o">
                          <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-right-o" />
                        </svg> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

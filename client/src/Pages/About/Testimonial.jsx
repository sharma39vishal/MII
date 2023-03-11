import React from "react";
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div>
      {/* <section className="zl-testimonial">
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
                        </svg> 
                      </button>
                    </div>
                    <div className="zl-testimonial-nav -next">
                      <button
                        className="zl-btn zl-btn_nav swiper-button-disabled"
                        disabled="">
                        {/* <svg className="zl-svgsprite -arrow-right-o">
                          <use xlinkHref="/assets/img/sprites/svgsprites.svg#arrow-right-o" />
                        </svg> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
      <section className="testimonial text-center">
  <div className="container">
    <div className="heading white-heading">Testimonial</div>
    <div
      id="testimonial4"
      className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
      data-ride="carousel"
      data-pause="hover"
      data-interval={5000}
      data-duration={2000}
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="testimonial4_slide">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              className="img-circle img-responsive"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <h4>Client 1</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial4_slide">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              className="img-circle img-responsive"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <h4>Client 2</h4>
          </div>
        </div>
        <div className="carousel-item">
          <div className="testimonial4_slide">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              className="img-circle img-responsive"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <h4>Client 3</h4>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#testimonial4"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        className="carousel-control-next"
        href="#testimonial4"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </div>
</section>

      </section> */}

<>
  {/* Some Important Stuff here  */}
  <div className="header">
      <h2>Testimonials</h2>
    <div className="container">
      <div className="slider">
        <div className="testimonal" id="testimonal-1">
          <div className="user-text">
            <h3>Lorem name</h3>
            <div className="twitter">
              <small>
                @loremname <i className="fab fa-twitter" />
              </small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo
              dolorem possimus delectus sint modi! Minima omnis exercitationem
              nemo ea.
            </p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className="user"
            />
          </div>
        </div>
        <div className="testimonal" id="testimonal-2">
          <div className="user-text">
            <h3>Ipsum name</h3>
            <div className="twitter">
              <small>
                @loremname <i className="fab fa-twitter" />
              </small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              voluptates. Hic dolorum aut reiciendis veritatis est magnam nihil
              veniam nemo.
            </p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className="user"
            />
          </div>
        </div>
        <div className="testimonal" id="testimonal-3">
          <div className="user-text">
            <h3>Dolor name</h3>
            <div className="twitter">
              <small>
                @loremname <i className="fab fa-twitter" />
              </small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo
              dolorem possimus delectus sint modi! Minima omnis exercitationem
              nemo ea.
            </p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className="user"
            />
          </div>
        </div>
        <div className="testimonal" id="testimonal-4">
          <div className="user-text">
            <h3>Sit name</h3>
            <div className="twitter">
              <small>
                @loremname <i className="fab fa-twitter" />
              </small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo
              dolorem possimus delectus sint modi! Minima omnis exercitationem
              nemo ea.
            </p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className="user"
            />
          </div>
        </div>
        <div className="testimonal" id="testimonal-5">
          <div className="user-text">
            <h3>Amet name</h3>
            <div className="twitter">
              <small>
                @loremname <i className="fab fa-twitter" />
              </small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo
              dolorem possimus delectus sint modi! Minima omnis exercitationem
              nemo ea.
            </p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className="user"
            />
          </div>
        </div>
      </div>
      <div className="slider-btn">
        <a href="#testimonal-1">
          <span className="dot" />
        </a>
        <a href="#testimonal-2">
          <span className="dot" />
        </a>
        <a href="#testimonal-3">
          <span className="dot" />
        </a>
        <a href="#testimonal-4">
          <span className="dot" />
        </a>
        <a href="#testimonal-5">
          <span className="dot" />
        </a>
      </div>
    </div>
  </div>
</>

    </div>
  );
};

export default Testimonial;

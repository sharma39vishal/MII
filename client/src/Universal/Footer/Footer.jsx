import React from "react";
import Copyright from "./Copyright";
import "./footer.css";
export default function Footer() {
  return (
    // <div className='footer-box'>
    //     <h1>Want to Know More?</h1>
    //     <u style={{color:"green"}}><h1>Get in Touch</h1></u>

    //     <div className='footer-bottom'>
    //         <div className='bootom-firstline'>
    //           <div>
    //         <img src='./images/medicaps.png' alt='' width={"120px"}/>
    //         <img src='./images/25year.png' alt='' width={"100px"}/>
    //         </div>
    //         <div className='footer-pages'>
    //         <h6>Home</h6>
    //         <h6>Our Offerings</h6>
    //         <h6>Blogs</h6>
    //         <h6>Events</h6>
    //         </div>
    //         </div>
    //         <div className='social-icons'>
    //         <i class="fa-brands fa-facebook"></i>
    //         <i class="fa-brands fa-instagram"></i>
    //         <i class="fa-brands fa-twitter"></i>
    //         </div>
    //     </div>
    //     <Copyright/>
    // </div>
    <section className="zl-outro">
        <div className="zl-outro-content">
          <div className="zl-outro-container">
            <div className="zl-outro-header">
              <h2>Want to know more?</h2>
              <a href="/contactus">Get in touch</a>
            </div>
            <div className="zl-outro-footer">
              <div className="zl-outro-grid">
                <div className="zl-outro-grid-col -left">
                  <div className="zl-outro-logo"><img src="/assets/img/logo-i.png" srcSet="/assets/img/logo-i@2x.png 2x" alt="" /></div>
                </div>
                <div className="zl-outro-grid-col -right">
                  <div className="zl-outro-navs"><a className="zl-outro-nav" href="/"><span>Privacy Policy</span></a>
                  <a className="zl-outro-nav" href="/ourofferings"><span>About Us</span></a>
                  <a className="zl-outro-nav" href="/ourofferings"><span>Services</span></a>
                  {/* <a className="zl-outro-nav" href="/ourofferings"><span>SocialMedia Icons</span></a> */}
                  <a className="zl-outro-nav" href="/ourofferings"><span>Address</span></a>
                  {/* <a className="zl-outro-nav" href="/blogs"><span>Blogs</span></a>
                  <a className="zl-outro-nav" href="/contactus"><span>Contact Us</span></a> */}
                  </div>
                  <div className="zl-outro-socials" >
                    <a className="zl-outro-social" href="#" target="_blank" >
                      <i class="fa-brands fa-facebook "></i>
                    </a>
                    <a className="zl-outro-social" href="#" target="_blank" >
                    <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a className="zl-outro-social"  href="#" target="_blank" >
                    <i  class="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center", paddingTop:"20px"}}>
        <h6>Copyright @Medicaps Software Cell</h6>
        </div>
      </section>
  );
}

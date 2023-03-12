import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default Testimonial;




















































// import React from 'react'
// import "./aboutus.css"
// export default function Testimonials() {
//   return (
//     <div>
        
//     <section className="testimonial text-center">
//         <div className="container">

//             <div className="heading white-heading">
//                 Testimonial
//             </div>
//             <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
//                 <div className="carousel-inner" role="listbox">
//                     <div className="carousel-item active">
//                         <div className="testimonial4_slide">
//                             <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" />
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
//                             <h4>Client 1</h4>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="testimonial4_slide">
//                             <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
//                             <h4>Client 2</h4>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <div className="testimonial4_slide">
//                             <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" />
//                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
//                             <h4>Client 3</h4>
//                         </div>
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
//                     <span className="carousel-control-prev-icon"></span>
//                 </a>
//                 <a className="carousel-control-next" href="#testimonial4" data-slide="next">
//                     <span className="carousel-control-next-icon"></span>
//                 </a>
//             </div>
//         </div>
//     </section>

//     </div>
//   )
// }

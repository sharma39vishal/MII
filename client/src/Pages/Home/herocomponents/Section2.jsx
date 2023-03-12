import React from "react";
import "./Section2.css";
export default function Section2() {
  return (
    <>
    <div className="aboutus">
      <div className="abtmii">
        MII Foundation,<br/> a Section-8 company based in India, <br/>is an incubator dedicated to supporting and nurturing innovative start-ups at Medi-Caps University in Indore. As a start-up incubator, MII Foundation provides a collaborative and inclusive environment for entrepreneurs to grow their businesses.
      </div>
      <div className="morein" >
         At MII Foundation, we have a culture that is collaborative, inclusive, and centered around innovation and creativity. <span className="greenColor"> We believe in fostering a supportive environment where start-ups can come together to share ideas, knowledge, and experiences.<span></span>
      </span>
      </div>
    </div>

      <div className="someth1" >
        <div className="head">
          Discover your passion and kickstart your business journey
        </div>
        <div className="content">
            At MII, we are dedicated to helping entrepreneurs unlock their full
            potential and achieve success. Our team of experienced professionals
            provide a range of services including co-working, mentorship,
            consulting, networking, and access to funding. We provide resources
            to help entrepreneurs stay up to date with the latest industry
            trends, including articles and insights, events and webinars, and
            success stories. If you're ready to take your business to the next
            level, contact us today to get started.
            <br/>
            <br/>
          <button id="btn" style={{ display: "none" }}></button>
          <label for="btn" style={{ cursor: "pointer" }}>
            <span className="underLi"> Get more information about MII Foundation {"-->"} </span><span/> 
          </label>
        </div>
   
      </div>
    </>
  );
}

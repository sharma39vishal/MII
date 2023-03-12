import React from "react";
import "./ouradvisor.css";
export default function OurAdvisor() {
  return (
    <div className=" " >
      <h1 style={{ textAlign: "center" }}>OUR TEAM</h1>
      <div className="our-team">
        <div className="single-person">
          <img
            src="https://images.megapixl.com/4707/47075236.jpg"
            alt=""
            width={"300px"}
          />
          <h3>Name Surname</h3>
          <p>Some other info</p>
        </div>
        <div className="single-person">
          <img
            src="https://images.megapixl.com/4707/47075236.jpg"
            alt=""
            width={"300px"}
          />
          <h3>Name Surname</h3>
          <p>Some other info</p>
        </div>
        <div className="single-person">
          <img
            src="https://images.megapixl.com/4707/47075236.jpg"
            alt=""
            width={"300px"}
          />
          <h3>Name Surname</h3>
          <p>Some other info</p>
        </div>
        <div className="single-person">
          <img
            src="https://images.megapixl.com/4707/47075236.jpg"
            alt=""
            width={"300px"}
          />
          <h3>Name Surname</h3>
          <p>Some other info</p>
        </div>
      </div>
    </div>
  );
}

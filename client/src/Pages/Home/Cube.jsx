import React from "react";
import "./Cube.css";

export default function Cube() {
  return (
    <div className="row container-fluid justify-content-center" style={{ display: "flex", justifyContent: "center" , margin:"0"}}>
      <div className="col-lg-6" style={{ justifyContent: "justify-content-center" , padding:"10%" }}>
        <div  >
          <div className="circle" style={{ padding:"10%"}} >
            <div className="dots"></div>
            </div>
          </div>
      </div>
      <div className="col-lg-6 " style={{justifyContent: "center" ,padding:"15% 12% 12% 0"}}>
        <h1 style={{  textAlign: "center" ,fontSize: "250%" }}>MII Foundation</h1>
        <h4 style={{ textAlign: "center" }}>
          "Unlock Your Business Potential"
        </h4>
      </div>
    </div>
  );
}

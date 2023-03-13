import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {Link} from "react-scroll"
import "./header.css";
export default function Header() {
  const navigate=useNavigate();
    const [display, setDisplay] = useState(window.innerWidth > 1024? true : false);
    const [display1, setDisplay1] = useState(window.innerWidth > 1024? true : false);
  return (
    <div className="nav-header">
      <div className="header-bar">
        <div className="header-img-container">
          <NavLink to="/">
            <img src="./images/medicaps.png"  alt="" width={"80px"} />
          </NavLink>
        {!display1?<>
        {display ? (
            <p className="cross" onClick={() => setDisplay(!display)}>
              X
            </p>
          ) : (
            <div className="burger" onClick={() => setDisplay(!display)}>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
          </>:<></>}
        </div>
        {display ? <ul className="nav-items">
        <li className="nav-list">
            <NavLink to="/"><i class="fa-solid fa-house"></i> Home</NavLink>
          </li>
          <li className="nav-list list-active1">
            <NavLink to="/about" onClick={()=>{navigate("/about")}} ><i class="fa-solid fa-address-card"></i> About</NavLink>
              <ul className="nav-child1" onClick={()=>{navigate("/about")}}>
                {/* <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">About MII</Link>
                <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">Identity and Cultural</Link>
                <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">Team</Link>
                <Link to="hero" spy={true} smooth={true} offset={50} duration={500} className="nav-child-list1">Testimonials</Link> */}
                <li className="nav-child-list1"><i class="fa-solid fa-file"></i> <Link  onClick={()=>{navigate("/about")}} spy={true} smooth={true} offset={50} duration={500}>About MII</Link></li>
                <li className="nav-child-list1"><i class="fa-solid fa-handshake"></i> <Link  onClick={()=>{navigate("/about")}} spy={true} smooth={true} offset={50} duration={500}>Identity and Cultural</Link></li>
                <li className="nav-child-list1"><i class="fa-solid fa-people-group"></i> <Link  onClick={()=>{navigate("/about")}} spy={true} smooth={true} offset={50} duration={500}>Team</Link></li>
                <li className="nav-child-list1"><i class="fa-solid fa-photo-film"></i> <Link  onClick={()=>{navigate("/about")}} spy={true} smooth={true} offset={50} duration={500}>Testimonials</Link></li>
              </ul>
          </li>
          <li className="nav-list list-active2">
            <NavLink to="/ourofferings" ><i class="fa-solid fa-screwdriver-wrench"></i> Our offerings</NavLink>
              <ul className="nav-child2" onClick={()=>{navigate("/ourofferings")}} style={{cursor:"pointer"}}>
                <li className="nav-child-list2" ><i class="fa-solid fa-gears"></i> Services</li>
                <li className="nav-child-list2"><i class="fa-solid fa-bicycle"></i> Process</li>
                <li className="nav-child-list2"><i class="fa-solid fa-address-book"></i> Contact Us</li>
              </ul>
          </li>
          <li className="nav-list">
            <NavLink to="/blogs"><i class="fa-solid fa-blog"></i> Blog</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/events"><i class="fa-solid fa-calendar"></i> Events</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/contactus"><i class="fa-solid fa-id-card"></i> Contact us</NavLink>
          </li>
        </ul>
        :<></>}
      </div>
    </div>
  );
}

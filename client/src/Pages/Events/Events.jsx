import React from "react";
import "./Events.css";
import EventComponent from "./EventComponent";
export default function Events() {
  return (
    <div className="container">
      <div className="">
        <h1 className="text-center effect" >Upcoming Events</h1>
        <div className="d-flex row justify-content-center">
          <EventComponent />
          <EventComponent />
          <EventComponent />
          
        </div>
      </div>
      <div className="">
        <h1 className="text-center effect">Past Events</h1>
      </div>
    </div>
  );
}

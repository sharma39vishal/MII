import React from 'react'
import { NavLink } from 'react-router-dom'
import './Events.css'
export default function EventComponent() {
    return (
        <div className='col-lg-5 col-10 m-4'>
            <div style={{ position: "relative" }}>
                <img src="./images/event.jpeg" class="imgevent" />
                <div class='absolute '>
                    <h1 className='temp text-center'>
                        Event Name
                    </h1>
                    <div className='d-flex align-items-center my-2'>
                        <i className="fa fa-map-marker fa-2x m-2" aria-hidden="true"></i>
                        <span > Online </span></div>

                    <div className='d-flexalign-items-center'>
                        <i class="fa fa-clock-o m-2 fa-2x" aria-hidden="true"></i>
                        <span>12:00 pm -12.45 pm</span></div>
                    <div className='d-flexalign-items-center'>
                        <i className="fa fa-calendar m-2 fa-2x" aria-hidden="true"></i>
                        <span>12 January,2023</span></div>
                        <div className='m-1'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut dapibus turpis a lacinia lacinia. Suspendisse potenti. In eget mauris vitae turpis porta consectetur quis et ante.</p>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <NavLink to ='./knowmore' ><p className='btn btn-primary' >know More</p></NavLink>
                            <p className='btn btn-primary'>Register</p>
                        </div>

                </div>
            </div>
        </div>
    )
}

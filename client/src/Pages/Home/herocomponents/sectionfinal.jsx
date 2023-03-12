import React from 'react'
import { NavLink } from 'react-router-dom'
import './SectionFinal.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Sectionfinal() {
    return (
        <div className='container-fluid' >
            <div className=' d-flex row text-center align-items-center  '>
                <div className='col-md-8 col-10 d-flex row align-items-center' style={{ height: "80vh" }}>

                    <div style={{ color: "blue" }}>
                        <h1 style={{
                            fontSize: "80px",
                            // lineHeight: "80px",

                        }} >Incubation</h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation. Technology. Compliance.</p></div>



                </div>
                <div className='col-md-4 col -10'>
                    {/* <img src='	https://www.zenxlabs.io/assets/img/feature/2.png?1'  /> */}
                    <img src="https://www.zenxlabs.io/assets/img/feature/2.png?1" alt="hiii1" />
                </div>

            </div>
            <div className=' d-flex row text-center align-items-center  '>
                <div className='col-md-8 col-10 d-flex row align-items-center' style={{ height: "80vh" }}>

                    <div style={{ color: 'purple' }}>
                        <h1 style={{
                            fontSize: "80px",
                            color: "purple"
                            // lineHeight: "80px",

                        }} >Accelaration</h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>



                </div>
                <div className='col-md-4 col -10'>
                    <img src='https://www.zenxlabs.io/assets/img/feature/1.png?1' alt="hiii2" />
                </div>

            </div>
            <div className=' d-flex row text-center align-items-center  '>
                <div className='col-md-8 col-10 d-flex row align-items-center' style={{ height: "80vh" }}>

                    <div style={{ color: " #008a6e" }}>
                        <h1 style={{
                            fontSize: "80px",
                            // lineHeight: "80px",

                        }} >Adoption</h1>
                        <p style={{
                            fontSize: "24px",
                            lineHeight: "35px",
                            opacity: ".5"
                        }}>Ideation, technology, compliance</p></div>
                    <div >
                        <NavLink to='/about' className='abc'><button  className='pqr'>About Us</button></NavLink>
                    </div>
                </div>
                <div className='col-md-4 col -10'>
                    <img src='	https://www.zenxlabs.io/assets/img/feature/3.png?1' alt="hiii3"/>
                </div>


            </div>

        </div >
    )
}

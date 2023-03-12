import React from 'react'
import SponsorCarousel from './SponsorCarousel'
import './herocomponents/SectionFinal.css'
import { NavLink } from 'react-router-dom'

export default function Sponsors() {
    return (
        <div className='container-fluid p-5' style={{ backgroundColor: "#0F0F0F" }}>

            <div className='container ms-4 '  >
                {/* Content 1 */}
                <h1 style={{ fontSize: "4.5vw", fontWeight: "bold", color: "white" }}>From Concept <br></br>to Wide Adoption</h1>
            </div>

            {/* carousel */}
            <div className='my-5'>
                <SponsorCarousel />
            </div>
            {/* Content2 */}

            <div className='container my-2'>

            </div>

            {/* Read More button */}
            <div className=' ms-4'>
                <p style={{ fontSize: "1.5vw", fontWeight: "500" ,color:"white"}}>Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.
Hence the foundation of Medi-Caps University has been laid down. With a strong foundation of the Group since 15 years, Medi-Caps University wishes to maintain the same objective of imparting quality education and producing sound professionals for the benefit of the society at large..</p>
            </div>
            <div >
                <NavLink to='/ourofferings' className='abc'><button className='pqr'>Read More</button></NavLink>
            </div>
        </div>
    )
}

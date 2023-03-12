import React, { useEffect, useRef, useState } from "react";
import Diamond from "./Diamond/Diamond";
import Section13 from "./Section13";
import "./Section3.css";

export default function Section3() {
   const [scrollPos, setScrollPos] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
      console.log(window.pageYOffset)
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    if(scrollPos>=window.innerWidth > 1024? 840 : 500){
      sectionElement.style.transform = `translate(0, ${scrollPos*0.3}px)`;
    }
    
  }, [scrollPos]);

  return (
    <section className="zl-feature" id="checkht" style={{display:"flex"}}>
      <div className="zl-feature-scene" >  
        <canvas width={294} height={294} />
      </div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <div>
      <Section13/>
      </div>  
      </div>
      <section ref={sectionRef}>
      <Diamond/>
      </section>
    </section>
  );
}

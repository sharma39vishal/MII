import React from 'react'
import SingleAdvisor from './SingleAdviosor'

export default function Advisors() {
  return (
    <div>
      <div className="zl-staff-header">
        <h2>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              willChange: "auto",
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transform: "translate(0px, 0px)",
              // color:'white'
            }}
          >
            Advisors
          </div>
        </h2>
      </div>
      <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Amol Nitave"} designation={"Cheif Advisor"} about={"About Mr Amol Nitave"} />
      <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Amol Nitave"} designation={"Cheif Advisor"} about={"About Mr Amol Nitave"} />
      <SingleAdvisor img={"https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"} name={"Amol Nitave"} designation={"Cheif Advisor"} about={"About Mr Amol Nitave"} />

    </div>
  )
}

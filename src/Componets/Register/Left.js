import React from 'react'
import banner from "../../assets/image/Banner.png"


import "./Left.css";
function Left() {
  return (
    <>
     <div className="leftside">
        <img className='img' src={banner} alt="Banner img" />
        <p>Discover new things on <br /> Superapp</p>
     </div>


    </>
  )
}

export default Left

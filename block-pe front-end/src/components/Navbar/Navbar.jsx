import React from 'react';
import './Navbar.css'
import logo from './Mi.png'
const Navbar=()=>{
  return(
    <>
    <div class="navdec">
    <img src={logo}></img>
   <h3 onClick={()=>window.location.href="/About"}>Block Pe</h3>
   <img src={logo}></img>
</div>
    </>
  )
}

export default Navbar
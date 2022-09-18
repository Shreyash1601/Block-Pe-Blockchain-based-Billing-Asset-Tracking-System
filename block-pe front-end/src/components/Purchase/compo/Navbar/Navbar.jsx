import React,{useState} from 'react'
import './navbar.css'
const Navbar=({setShow})=>{
    return(
        <>
        <nav>
            <div className="nav_bar">
            <span className='my_shop' onClick={()=>setShow(true)}>Welcome to MI</span>
            <div className='cart' onClick={()=>setShow(false)}>
            <span>Click->
                <i className='fas fa-cart-plus'></i>
            </span>
            </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar
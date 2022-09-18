import React from 'react';
import './Button.css'
const Button1=()=>{
    return(
        <div className='buttons'>
    <div onClick={(e)=>{window.location.href="/Purchase"}}>Purchase</div>
    <div onClick={(e)=>{window.location.href="/verify"}}>Verify</div>
    <div onClick={(e)=>{window.location.href="/records"}}>Records</div>
    <div onClick={(e)=>{
        window.location.href="/resell"
    }}>Resell Price</div>
    </div>
    )
}
export default Button1
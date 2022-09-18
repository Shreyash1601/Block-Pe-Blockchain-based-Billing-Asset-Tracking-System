import React,{useState} from 'react';
import './purchase.css'
import Button1  from '../Buttons/Button1';
import Navbar from './compo/Navbar/Navbar'
import Amazon  from './compo/Amazon/Amazon';
import Cart from './compo/Cart/Cart'
const Purchase=()=>{
    const [show,setShow]=useState(true)
    const [cart,setCart]=useState([]);
    const handleClick=(item)=>{
        if(cart.indexOf(item)!==-1) return;
        setCart([...cart,item])
    }
    const handleChange=(item,d)=>{
        const ind=cart.indexOf(item);
        const arr=cart;
        arr[ind].amount+=d;
        if(arr[ind].amount===0) arr[ind].amount=1;
        setCart([...arr]);
    }
    return(
        <>
        <Button1/>
        <div className="ECart">
        <Navbar setShow={setShow}/>
        {
            show?<Amazon handleClick={handleClick}/>:<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        }
        </div>
        </>
    )
}
export default Purchase
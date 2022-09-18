import React,{useState} from 'react'
import list from '../../data.js'
import Card from '../Cards/Card'
import './Amazon.css'
const Amazon=({handleClick})=>{
   
    return(
        <>
        <section>
            {
                list.map((item)=>(
                    <Card key={item.id} item={item} handleClick={handleClick}/>
                ))
            }
        </section>
        </>

    )
}
export default Amazon
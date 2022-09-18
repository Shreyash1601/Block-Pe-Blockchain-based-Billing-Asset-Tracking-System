import React,{useState} from 'react'
import Spinner  from '../Spinner/Spinner'
import Button1 from '../Buttons/Button1'
import './Resell.css'
const Resell=()=>{
    const [flag,setFlag]=useState(false)
    const [price,setPrice]=useState(null)
    const [data,setData]=useState({
        cond:"",
        YOM:"",
        OPrice:"",
        cat:""
    })
    const input=(event)=>{
        let name=event.target.name
        let value=event.target.value
        setData((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const submit=async (event)=>{
        event.preventDefault();
        setFlag(!flag)
        const data2=new FormData()
        data2.append('cat',Number(data.cat))
        data2.append('cond',Number(data.cond))
        data2.append('OPrice',Number(data.OPrice))
        data2.append('YOM',Number(data.YOM))
        try{
            const res=await fetch("https://block-pe-predict.herokuapp.com/predict",{
                method:"POST",
                body:data2
              })
              const result=await res.json()
              if(res.status!==200||!result){
                window.alert("Invalid request!!Check your connection or check the details provided")
              }
              else{
                console.log(result)
                setPrice(result.NPrice)
              }
     
        }catch(err){
            window.alert("Some error occured")
        }
    }
    return(
        <>
        <Button1/>
        <div className='form'>
        <label for="exampleInputEmail1">Enter 0 for Good: 1 for Average: 2 for Bad</label>
        <input onChange={input} placeholder='Enter the condition of Product: Good/Average/Bad' name="cond" value={data.cond} type="text"/>
        <label for="exampleInputEmail1">Enter Category of Product 0 for Phone ; 1 for SmartWatch ; 2 for TV</label>
        <input onChange={input} placeholder='Enter the Category of Product:Phone/TV/SmartWatch' name="Cat" value={data.Cat} type="text"/>
        <label for="exampleInputEmail1">Enter Year of Manufacture</label>
       <input onChange={input} placeholder='Enter year of manufacture' name="YOM" value={data.YOM} type="number"/>
       <label for="exampleInputEmail1">Enter Original Price</label>
       <input onChange={input} placeholder='Enter Original Price' name="OPrice" value={data.OPrice} type="number"/>
           <div style={{display:flag?"block":"none"}}>{
           price?<h1>{price}</h1>:<Spinner/>
           }
           </div>
       <button onClick={submit}>Predict</button>
        </div>
        </>
    )
}
export default Resell;
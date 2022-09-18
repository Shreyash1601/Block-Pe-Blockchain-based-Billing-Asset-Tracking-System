import react,{useState} from 'react';
import Search from './search.png'
import Card from './Cards/Card'
import "./Records.css"
import { render } from "@testing-library/react";
import Button1 from '../Buttons/Button1'
import Spinner from '../Spinner/Spinner'
const Records=()=>{
    const [flag,setFlag]=useState(false)
    const [data,setData]=useState([])
    const [input,setInput]=useState(null);
    const inputEvent=(e)=>{
        let value=e.target.value;
        setInput(value)
    }
    const displayAll=async ()=>{
        if(!flag) setFlag(!flag)
        const res=await fetch(`https://block-pe-backend.herokuapp.com/records/all`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({Invoice:input})
        })
        const result=await res.json();
        if(res.status>=400 ||!result){
            setFlag(false)
            window.alert("Data not found")
        }
        else{
            console.log(result)
            setFlag(false)
            setData(result)
        window.alert("Success!!")
        }
        
    }
    const Submit= async (e)=>{
        e.preventDefault();
        if(!flag) setFlag(!flag)

        const res=await fetch(`https://block-pe-backend.herokuapp.com/records`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({Invoice:input})
        })
        const result=await res.json();
        if(res.status>=400 ||!result){
            setFlag(false)
            window.alert("Data not found")
        }
        else{
            console.log(result)
            setData(result)
            setFlag(false)
        window.alert("Success!!")
        }
        
    }
    return(
        <>
        <Button1/>
       
        <div class="head3">Transactions performed in Past</div>
        <button class="DisplayAll" onClick={displayAll}>Diplay All</button>
        <div class="Card4">
        <div style={{display:flag?"block":"none"}}>
            {
                <Spinner/>
            }
        </div>
        <div>
            <input type="text" class="input"placeholder="Enter Invoice number" name="input" value={input}
                onChange={inputEvent} onSubmit={Submit}
            />
            <img src={Search} onClick={Submit}/>
        </div>
        {
            data.map((e)=>{
                return(
                    <div className="cards">
                    <Card StoreName={e.StoreName} Invoice={e.Invoice} email={e.email} phone={e.phone} MIStoreID={e.MIStoreID} AadharCard={e.AadharCard} CustomerName={e.CustomerName} DOP={e.DOP} ProductPrice={e.ProductPrice} PCategory={e.PCategory} ProductName={e.ProductName} />
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Records;
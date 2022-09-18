import { render } from '@testing-library/react';
import Spinner from '../Spinner/Spinner'
import React,{useState} from 'react';
import Search from './search.png'
import './Verify.css'
import Button1 from '../Buttons/Button1'
const Verify=()=>{
  const [flag,setFlag]=useState(false)
    const [CID,setCID]=useState("");
    const [result,setResult]=useState(false);
    const [status,setStatus]=useState(false);
    const [data,setData]=useState({
        StoreName:"",
        PManufacture:"",
        ShippedBy:"",
        PSpecs: {},
        Invoice:"",
        PCategory:"",
        ProductName:"",
        ProductPrice: "",
        DOP: "",
        DOM: "",
        LTS: "",
        CustomerName:"",
        AadharCard: "",
        email: "",
        phone: "",
        MIStoreID:""
    })
    const inputEvent=(event)=>{
        const val=event.target.value;
        setCID(val)
    }
    const f1=(e)=>{
        let data2=""
       for (let i in e){
           data2+=e[i]+"\n";
        }
        return <h6>{data2}</h6>
    }
    const display=()=>{
        setStatus(current=>!current)
    }
    const Submit=async (event)=>{
        event.preventDefault()
        if(!flag)
        setFlag(true)
        if(result){
          setResult(false)
        }
        const res=await fetch(`https://gateway.ipfs.io/ipfs/${CID}`,{
            method:"GET"
        })
        try{
        const result= await res.json();
        if(res.status===200){
            console.log(result)
        window.alert("Success")
        display()
        setData({...result})
        }
        else if(res.status>=400){
            window.alert("Some unknown error occured")
            setResult(true)
            setFlag(false)
        }  
    }catch(err){
        window.alert("Some unknown errot occured")
        setResult(true)
        setFlag(false)
        setData({})
    } 
    }
    return(
        <>
            <Button1/>
            
            <div class="Card2">
            <div style={{margin:"auto",display:flag?"block":"none"}}>
            {
              <Spinner/>
            }
            </div>
            <div class="head2">Enter the Product Hash Key</div>
            <div className="SI">
            <input type="text" name="CID" value={CID}placeholder="Enter Hash ID" onChange={inputEvent}></input>
            <div class="search" onClick={Submit}>
            </div>
            </div>
            <div class="Details" style={{display:status?"block":"none"}}>
            <table>
  <tr>
    <th>Parameter</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Store Name</td>
    <td>{data.StoreName}</td>
  </tr>
  <tr>
    <td>MI Store ID</td>
    <td>{data.MIStoreID}</td>
  </tr>
  <tr>
    <td>Product Name</td>
    <td>{data.ProductName}</td>
  </tr>
  <tr>
    <td>Place of Manufacture</td>
    <td>{data.PManufacture}</td>
  </tr>
  <tr>
    <td>Shipped By</td>
    <td>{data.ShippedBy}</td>
  </tr>
  <tr>
    <td>Product Specifications</td>
    <td>{f1(data.PSpecs)}</td>
  </tr>
  <tr>
    <td>Invoice</td>
    <td>{data.Invoice}</td>
  </tr>
  <tr>
    <td>Category of Product</td>
    <td>{data.PCategory}</td>
  </tr>
  
  <tr>
    <td>Price of Product at the time of Purchase</td>
    <td>{data.ProductPrice}</td>
  </tr>
  <tr>
    <td>Date of Purchase</td>
    <td>{data.DOP}</td>
  </tr>
  <tr>
    <td>Date of Manufacture</td>
    <td>{data.DOM}</td>
  </tr>
  <tr>
    <td>Last Time Serviced</td>
    <td>{data.LTS}</td>
  </tr>
  <tr>
    <td>Name of the Customer</td>
    <td>{data.CustomerName}</td>
  </tr>
  <tr>
    <td>Aadhar Card Number of Customer</td>
    <td>{data.AadharCard}</td>
  </tr>
  <tr>
    <td>Email of Customer</td>
    <td>{data.email}</td>
  </tr>
  <tr>
    <td>Phone Number of Customer</td>
    <td>{data.phone}</td>
  </tr>
 
</table>

            </div>
           
            </div>
            <div style={{textAlign:"center",display:result?"block":"none"}}>
            <div class="Result">
            </div>
<h2>Data Not Found !!</h2>

            </div>
        </>
    )
}
export default Verify;
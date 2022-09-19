import react,{useState,useEffect} from 'react';
import './Bill.css';
import Spinner from '../Spinner/Spinner'
import Button1 from '../Buttons/Button1'
import { QrReader } from 'react-qr-reader';
const Bill=(props)=>{
    useEffect(()=>{
    window.alert(`In order to receive Bill on Whatsapp, Kindly activate your Twilio sandbox by sending the code "join putting-stairs" to +1 (415) 523-8886\n
    \n Also before preparing the bill kindly ensure that the IPFS server is running...`)},[])
    const [flag2,setFlag2]=useState(false)
    const [flag1,setFlag1]=useState(true)
    const [QR,setQR]=useState(true)
    const [hash2,setHash]=useState("")
    const [data,setData]=useState({
        StoreName:"",
        Hash:"Not available as IPFS is not running",
        DOM:"",
        LTS:"",
        PManufacture:"",
        ShippedBy:"",
        PSpecs:"",
        Invoice:" ",
        PCategory:"",
        ProductName:"",
        ProductPrice:"",
        DOP:"",
        CustomerName:"",
        AadharCard:"",
        email:"",
        phone:"",
        MIStoreID:""
    })  
    const QRchange=()=>{
        setQR(!QR)
    }
    const inv=()=>{
        var date=new Date();
        let inv=date.getDate()+date.getTime()+data.phone;
        return inv;
    }  
    const inputEvent=(event)=>{
        let val=event.target.value;
        const name=event.target.name;
        if(name=="phone"||name=="ProductPrice"){
            val=Number(val);
        }
        setData((prev)=>{
            return {
                Invoice:inv(),
                ...prev,
                [name]:val
            }
           
        })
    }

    const Submit=async (event)=>{
        event.preventDefault();
        if(!flag2) setFlag2(!flag2)
        try{
        const res2=await fetch("http://localhost:5000/ipfs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify(data)
        })
        const result2=await res2.json();

        if(res2.status>=400 ||!result2){
            window.alert("Error occurred at IPFS server")
        }
        else{
            console.log(result2.CID)
            setHash(result2.CID)
            setData((prev)=>{
                return {
                    ...prev,
                    Hash:result2.CID,
                    Invoice:inv(),
                }})
        window.alert(`Successfully added to IPFS!!\n
        Hash:-${result2.CID}
        Kindly copy this Hash ID for reference`);
        }
    }catch(err){
        window.alert("Check whether IPFS server is running or not")
    }
        try{
            setData((prev)=>{
                return {
                    ...prev,
                    Invoice:inv(),
                }})
        const res=await fetch("https://block-pe-backend.herokuapp.com/purchase",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify(data)
        })
        const result=await res.json();
        if(res.status>=400 ||!result){
            console.log(result)
            window.alert("Inavlid Credentials")
            setFlag2(false)
        }
        else{
            console.log(data)
        window.alert("Success!!")
        window.alert(JSON.stringify(data))
        setFlag1(false)
        setFlag2(false)

        }
    }catch(err){
        window.alert("Some error occured")
        console.log(err)
    }
    }
    return(
        <>
        <Button1/>
        <div style={{marginLeft:"50vw",display:flag2?"block":"none"}}>
        {
            
            <Spinner/>
        }
        </div>

        <div class="bill" style={{display:flag1?"block":"none"}}>
        <h1>Enter the following details of the product</h1>
        <div class="Card3" >
        <div class="QRcode" style={{display:QR?"none":"block"}}>
        <QrReader
        onResult={(result, error) => {
          if (result) {
              setQR(true)
              console.log(result.text)
              setData((prev)=>{
            return {
                ...prev,
                ...JSON.parse(result.text)
            }
              })
           
          }

          if (error) {
            console.log(error);
          }
        }}
      />
      </div>
        <div class="Butto" >
            <div>
                <button class="buttt" onClick={Submit}>Buy Now</button>
                <h5>Double Click</h5>
            </div>
            <div>
                <button id="QR" onClick={QRchange} class="buttt"></button>
                <h5>Scan QR Code <br/>to fetch details</h5>
            </div>
            </div>
            <div>
                <input type="text" onChange={inputEvent}placeholder="Enter Store Name" name="StoreName" value={data.StoreName}></input>
                <input type="text" onChange={inputEvent}placeholder="Enter MI Store ID"name="MIStoreID" value={data.MIStoreID}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Enter Product Category" name="PCategory" value={data.PCategory}></input>
                <input type="text" onChange={inputEvent}placeholder="Enter Product Name"name="ProductName" value={data.ProductName}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Enter Product Price"name="ProductPrice" value={data.ProductPrice}></input>
                <input type="text"placeholder="Enter Date of Purchase" name="DOP" onChange={inputEvent} value={data.DOP}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Enter Customer Name" name="CustomerName" value={data.CustomerName}></input>
                <input type="text" onChange={inputEvent}placeholder="Enter Aadhar Number"name="AadharCard" value={data.AadharCard}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Enter email" name="email" value={data.email}></input>
                <input type="text" onChange={inputEvent}placeholder=" Enter phone number" name="phone" value={data.phone}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Enter Date of Manufacture" name="DOM" value={data.DOM}></input><input type="text" onChange={inputEvent}placeholder="Enter Last Time Serviced" name="LTS" value={data.LTS}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Enter Place of Manufacture" name="PManufacture" value={data.PManufacture}></input><input type="text" onChange={inputEvent}placeholder="Product Specification a" name="PSpecs" value={data.PSpecs}></input>
                </div>
                <div>
                <input type="text" onChange={inputEvent}placeholder="Shipped By" name="ShippedBy" value={data.ShippedBy}></input>
                <select name="paymode">
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Credit/Debit Card">credit/Debit Card</option>
                </select>
                </div>
           
        </div>
        </div>
        <div className='done' style={{display:flag1?"none":"block"}}>
        </div>
        <h1  style={{display:flag1?"none":"block"}}>Bill Successfully Sent on to Your registered Email and Whatsapp number</h1>
        </>
    )
}
export default Bill
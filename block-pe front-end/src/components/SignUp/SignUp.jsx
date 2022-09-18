import React,{useState} from 'react';
import './Signup.css'
import Spinner from '../Spinner/Spinner'
const SignUp=()=>{
    const [flag,setFlag]=useState(false)
    const [data,setData]=useState({
        MIStoreID:"",
        password:"",
        POS:"",
        name:"",
        email:"",
        phone:null,
        cpassword:"",
    });
    const inputEvent=(event)=>{
        const val=event.target.value;
        const name=event.target.name;

        setData((prev)=>{
            return {
                ...prev,
                [name]:val
            }
           
        })
    }
    const onSubmits=async (event)=>{
        event.preventDefault();
        if(!flag)
        setFlag(!flag)
        if(data.password!==data.cpassword){
            window.alert("password and confirm password are not matching")
        }
        else{
        const res=await fetch("https://block-pe-backend.herokuapp.com/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify(data)
        })

        const result=res.json();
        if(res.status>=400 ||!result){
            setFlag(false)
            window.alert("Inavlid Credentials")
        }
        else{
            console.log(result)
            setFlag(false)
        window.alert("Registerd successfully")
        window.location.href="/About"
        }
    }
    }








    return(
        <>
            <div className='Card1'>
            <div style={{display:flag?"block":"none"}}>
            <Spinner/>
            </div>
            <div class="head1">Enter the following details
    </div>
    <form onSubmit={onSubmits}>
    <div class="formi">
    <div>
    <input type="text" class="entry" placeholder="Enter your name" name="name" onChange={inputEvent} value={data.name}/>
        <input type="text" class="entry" placeholder="Enter your email" name="email" onChange={inputEvent} value={data.email}/>

        <input type="number" class="entry" placeholder="Enter your phone number" name="phone" onChange={inputEvent} value={data.phone}/>
</div>
<div>
        <input type="text" class="entry" placeholder="Enter your POS ID" name="POS" onChange={inputEvent} value={data.POS}/>

       
        <input type="text" class="entry" placeholder="Enter your password" name="password" onChange={inputEvent} value={data.password}/>
        <input type="text" class="entry" placeholder="Confirm your password" name="cpassword" onChange={inputEvent} value={data.cpassword}/>
        </div>
        <div>
        
        <input type="text" class="entry" placeholder="Enter your unique MI Store ID" name="MIStoreID" onChange={inputEvent} value={data.MIStoreID}/>

        <button type="submit" class="Login1" onClick={onSubmits}>Register</button>
        </div>
        </div>
    </form>
</div>
        </>

    )
}
export default SignUp
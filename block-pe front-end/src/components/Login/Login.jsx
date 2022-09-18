import React,{useState} from 'react';
import './Login.css'
import Spinner from '../Spinner/Spinner'
const Login=()=>{
    const [flag,setFlag]=useState(false)
    const [data,setData]=useState({
        MI:"",
        pass:""
    });
    const inputEvent=(event)=>{
        const val=event.target.value;
        const name=event.target.name;

        setData((prev)=>{
            if(name==="MI"){
                return {
                    MI:val,
                    pass:prev.pass
                };
            }
            else if(name==="pass"){
                return {
                    MI:prev.MI,
                    pass:val
                }
            }
        })
    }
    const onSubmits=async (event)=>{
        event.preventDefault();
        setFlag(!flag)
        const res=await fetch("https://block-pe-backend.herokuapp.com/Login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({MIStoreID:data.MI,password:data.pass})
        })

        const result=res.json();
        if(res.status>=400 ||!result){
            window.alert("Inavlid credentials")
        }
        else{
            console.log(result)
        window.alert("Logged In")
    window.location.href="/about"

        }
    }



  return(
    <>
    <div class="Card">
    <div class="head">Login using MI ID and password
    </div>
    <form onSubmit={onSubmits}>
    <div class="formi">
        <input type="text" class="entry" placeholder="Enter your unique MI Store ID" name="MI" onChange={inputEvent} value={data.MI}/>

        <input type="text" class="entry" placeholder="Enter your password" name="pass" onChange={inputEvent} value={data.pass}/>
        <button type="submit" class="Login" onClick={onSubmits}>Log In</button>
        </div>
    </form>
    <div style={{display:flag?"block":"none"}}>
        {
            <Spinner/>
        }
    </div>
    <div class="Reg"><h3>New User??</h3>

    <a href="/register"><button class="SignUp">Sign Up</button></a>
    </div>
</div>
    </>
  )
}

export default Login
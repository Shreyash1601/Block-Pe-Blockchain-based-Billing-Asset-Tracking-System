import React from 'react';
import './About.css'
import Button1 from '../Buttons/Button1'
import logo from './logo.jpeg'

const About=()=>{
return(
    <>
    <div className="Content">
    <h1>Block Pe: Billing & Asset Tracking Application</h1>
    <Button1/>
    <div className='matter'>
    <p><b>Block Pe</b> is a Billing & Asset Tracking Application which is designed to ease the Billing process of Xiaomi products at Xiomi retail outlets.
    <br/>
    <br/>

    The <b>Key feature</b> of Block Pe is that it is capable of storing<em> Product as well as it's ownership details on a Blockchain network</em>.
    <br/>
    <br/>
    At the time of Resell, the shopkeeper can verify whether the person willing to resell the product is a legitimate owner or not!!!.

    This will eliminate the cases of smuggling and robbing or stealing of electronic gadgets like mobiles ,TV, smartwatches etc. as the information regarding the actual legitimate owner of the product is already stored on the Blockchain network which is  <em>immutable</em>.
    <br/>
    <br/>
    The shopkeeper can then alert the <em>authorities</em> regarding the discrepancy found at the time of reselling the product who could then catch hold of the thieves/smugglers.
    </p>
    <img src={logo}/>
    </div>
    </div>
    </>
)
}
export default About
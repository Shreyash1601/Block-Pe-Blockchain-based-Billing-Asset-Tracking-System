import react from 'react';
import './Card100.css';
const Card=(props)=>{
    return(
        <>
        <div class="Card6">
            <div id="SN">{props.StoreName}</div>
            <div class="details">
                <div class="headings">
                    <h5>Invoice</h5>
                    <h5>Product Name</h5>
                    <h5>Category</h5>
                    <h5>Price</h5>
                    <h5>Date of Purchase</h5>
                    <h5>Customer Name</h5>
                    <h5>Aadhar Card number</h5>
                    <h5>Email ID</h5>
                    <h5>Phone Number</h5>
                    <h5>MI Store ID</h5>
                </div>
                <div class="ans">
                <h5>{props.Invoice}</h5>
                <h5>{props.ProductName}</h5>
                <h5>{props.PCategory}</h5>
                <h5>{props.ProductPrice}</h5>
                <h5>{props.DOP}</h5>
                <h5>{props.CustomerName}</h5>
                <h5>{props.AadharCard}</h5>
                <h5>{props.email}</h5>
                <h5>{props.phone}</h5>
                <h5>{props.MIStoreID}</h5>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;
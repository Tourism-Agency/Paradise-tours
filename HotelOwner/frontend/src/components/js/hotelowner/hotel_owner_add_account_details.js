//import React, { Component } from "react";
import React, {useState,useEffect} from "react";
import  "../../css/hotelowner/hotel_owner_account.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Hotelowner_account_details(){
    const [user_name,setUser_name] = useState("");
    const [bank_name, setBank_name] = useState("");
    const [branch_name, setBranch_name] = useState("");   
    const [account_no,setAccount_no] = useState("");
    const [user_id,setUser_id] = useState("");

  
  
    const submitReview = () => {
        alert(user_name);
        Axios.post('http://localhost:5000/hotel/charge', {
          
        user_name:user_name, 
        bank_name:bank_name,
        branch_name:branch_name,
        account_no:account_no,
        user_id:user_id,        
        }).then( () => {
  
            alert("successfull insert");
        });
       
    };    

    return(

        
<div className="Account_update_new">
<form>
<div className="Charge">
    <center><h1>Bank Account Details</h1></center>
    <p>Please fill your bank account details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Account owner's name</h6></label>
    <input type="text" placeholder="Please enter account owner's name" name="user_name" id="" required onChange={(e) => {
            setUser_name(e.target.value);
            }}></input>

    <label htmlFor=""><h6>Bank Name</h6></label>
    <input type="text" placeholder="Bank Name" name="bank_name" id="" required onChange={(e) => {
            setBank_name(e.target.value);
            }}></input>


    <label htmlFor=""><h6>Branch Name</h6></label>
    <input type="text" placeholder="Branch Name" name="branch_name" id="" required onChange={(e) => {
            setBranch_name(e.target.value);
            }}></input>

    
    <label htmlFor=""><h6>Account Number</h6></label>
    <input type="int" placeholder="Please enter your account number" name="account_no" id="" required onChange={(e) => {
            setAccount_no(e.target.value);
            }}></input>

<input type="hidden" value="1" name="user_id" id=""  onChange={(e) => {
            setUser_id(e.target.value);

        }}></input>


    <hr></hr>

    <button onClick={submitReview} type="button" className="registerbtn">Submit</button>
  </div>

</form>
</div>




    );

}

export default Hotelowner_account_details;
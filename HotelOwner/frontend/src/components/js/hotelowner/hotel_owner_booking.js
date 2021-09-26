//import React, { Component } from "react";
import React, {useState,useEffect} from "react";
import '../../css/hotelowner/hotel_booking.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Hotel_booking_info() {
    const [contact_number,setContact_number] = useState("");
    const [booking_webside, setBooking_webside] = useState("");
    const [hotel_webside, setHotel_webside] = useState("");   
    const [user_id,setUser_id] = useState("");

  
  
    const submitReview = () => {
        Axios.post('http://localhost:5000/hotel/hotel_booking', {
          
        contact_number:contact_number, 
        booking_webside:booking_webside,
        hotel_webside:hotel_webside,
        user_id:user_id,        
        }).then( () => {
  
            alert("successfull insert");
        });
    };    


    return(

        <div className="Charge_new11">

            
    <form>
    <div className="Charge">
    <h1>Bank Account details</h1>
    <p>Please fill your Bank account details.</p>
    <hr></hr>

    <label htmlFor=""><h6>Account number</h6></label>
    <input type="int" placeholder="Please enter Account number" name="contact_number" id="" required onChange={(e) => {
            setContact_number(e.target.value);
            }}></input>

    <label htmlFor=""><h6>Bank Name</h6></label>
    <input type="text" placeholder="Please enter Bank Name" name="booking_webside" id="" required onChange={(e) => {
            setBooking_webside(e.target.value);
            }}></input>


    <label htmlFor=""><h6>Branch Name</h6></label>
    <input type="text" placeholder="Please enter Branch Name" name="hotel_webside" id="" required onChange={(e) => {
            setHotel_webside(e.target.value);
            }}></input>


<input type="hidden" value="1" name="user_id" id=""  onChange={(e) => {
            setUser_id(e.target.value);

        }}></input>


    <hr></hr>

    <Link to="/hotel_owner_profile"><button onClick={submitReview} type="submit" className="registerbtn">Submit</button></Link>
  </div>

</form>

        </div>

    );
    
}

export default Hotel_booking_info;
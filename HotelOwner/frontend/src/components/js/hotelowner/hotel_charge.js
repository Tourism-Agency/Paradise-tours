//import React, { Component } from "react";
import React, {useState,useEffect} from "react";
import '../../css/hotelowner/hotel_charge.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Hotel_charge() {
    const [price_single_room,setPrice_single_room] = useState("");
    const [price_double_room, setPrice_double_room] = useState("");
    const [price_family, setPrice_family] = useState("");   
    const [food_charge,setFood_charge] = useState("");
    const [user_id,setUser_id] = useState("");

  
  
    const submitReview = () => {
        Axios.post('http://localhost:5000/hotel/charge', {
          
        price_single_room:price_single_room, 
        price_double_room:price_double_room,
        price_family:price_family,
        food_charge:food_charge,
        user_id:user_id,        
        }).then( () => {
  
            alert("successfull insert");
        });
    };    


    return(

        <div className="Charge_new">

            
    <form>
    <div className="Charge">
    <h1>Hotel chagers update</h1>
    <p>Please fill your hotel charging details.</p>
    <hr></hr>

    <label htmlFor=""><h6>One day charge for single room</h6></label>
    <input type="text" placeholder="Please enter cost" name="price_single_room" id="" required onChange={(e) => {
            setPrice_single_room(e.target.value);
            }}></input>

    <label htmlFor=""><h6>One day charge for double room</h6></label>
    <input type="text" placeholder="Please enter cost" name="price_double_room" id="" required onChange={(e) => {
            setPrice_double_room(e.target.value);
            }}></input>


    <label htmlFor=""><h6>One day charge for family room</h6></label>
    <input type="text" placeholder="Please enter cost" name="price_family" id="" required onChange={(e) => {
            setPrice_family(e.target.value);
            }}></input>

    
    <label htmlFor=""><h6>Food charge for one pasenger with one day</h6></label>
    <input type="int" placeholder="Please enter cost" name="food_charge" id="" required onChange={(e) => {
            setFood_charge(e.target.value);
            }}
            ></input>

<input type="hidden" value="1" name="room_charge_id" id=""  onChange={(e) => {
            setUser_id(e.target.value);

        }}></input>


    <hr></hr>

    <Link to="/hotel_owner_profile"><button onClick={submitReview} type="submit" className="registerbtn">Submit</button></Link>
  </div>

</form>

        </div>

    );
    
}

export default Hotel_charge;
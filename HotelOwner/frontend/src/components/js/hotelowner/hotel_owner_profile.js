import React, {useState,useEffect} from "react";
import '../../css/hotelowner/hotel_owner_profile.css'
import { Link } from 'react-router-dom';
import Axios from "axios";

export default function Hotel_owner(){
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000/sign-in").then((response) => {
      if (response.data.loggedIn == true) {
        setFirstname(response.data.user[0].first_name);
        setLastname(response.data.user[0].last_name);
        setEmail(response.data.user[0].email_address);
      }
    });
  }, []); 

        return (
  
            <div className="Extranew"> 
    
              
            <div className="Imponew">
        
            <img className="Profilenew" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Datanew">
                      <br></br>
                      <h4>First Name : {firstname}</h4>
                      <h4>Last Name : {lastname}</h4>
                      <h4>Email : {email}</h4>
                      <h5>Hotel Owner</h5>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <Link to='/hotel_food_details'><h6>Hotel Foods</h6></Link>
                    <Link to='/hotel_room_details'><h6>Hotel Rooms</h6></Link>
                    <Link to='/hotel_charge'><h6>Charge of one day</h6></Link>
                    <Link to='/hotel_owner_add_account_details'><h6></h6></Link>
                    <Link to='/hotel_owner_booking'><h6>Bank Account</h6></Link>
                    <Link to='/hotel_owner_all_details'><h6>All added my details</h6></Link>

        
            </div>  
           
                <div className="Secondnew">
        
        
                 
                  <img className="Size4" src='./hotel/reciption.jpg' alt="" width="300" height="252"></img>
                  <img className="Size4" src='./hotel/kuru_food.jpg' alt="" width="300" height="245"></img> 
                  <img className="Size4" src='./hotel/pool.jpg' alt="" width="310" height="242"></img>
                  <img className="Size4" src='./hotel/juice.jpg' alt="" width="290" height="242"></img>
                  <img className="Size4" src='./hotel/bar.jpg' alt="" width="310" height="242"></img>
                  <img className="Size4" src='./hotel/kitchen.jpg' alt="" width="310" height="242"></img>
                
            
                 
                  </div> 
            
        
            </div>
        
        
      


        );
        
    }



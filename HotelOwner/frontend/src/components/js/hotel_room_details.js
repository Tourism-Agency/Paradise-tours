//import React, { Component } from "react";
import React, {useState,useEffect} from "react";
import Axios from 'axios';
import '../css/hotel_room.css'
import { Link } from 'react-router-dom';

function Hotel_room(){
    const [number_of_rooms,setNumber_of_rooms] = useState("");
    const [single_rooms, setSingle_rooms] = useState("");
    const [double_rooms, setDouble_rooms] = useState("");   
    const [family_rooms,setFamily_rooms] = useState("");
    const [user_id,setUser_id] = useState("");

  
  
    const submitReview = () => {
        Axios.post('http://localhost:5000/hotel/room_details', {
          
        number_of_rooms:number_of_rooms, 
        single_rooms:single_rooms,
        double_rooms:double_rooms,
        family_rooms:family_rooms,
        user_id:user_id,        
        }).then( () => {
  
            alert("successfull insert");
        });
    };    

    return(
       
        <div className="Hotel_room">  

            <div className="Room_picture">
            <img className="Pic_size" src='/room/one.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/room/two.jpg' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/room/three.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/room/four.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/room/five.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/room/six.png' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/room/seven.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/room/eig.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/room/nin.png' alt="" width="302" height="235"></img>



            </div>

       
<form>
<div className="Room_det">
    <center><h1>Hotel's Rooms Details</h1></center>
    <p>Please fill  hotel's rooms details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Number of All rooms</h6></label>
    <input type="int" placeholder="All rooms count" name="number_of_rooms" id="" required onChange={(e) => {
            setNumber_of_rooms(e.target.value);
            }}></input>

    <label htmlFor="email"><h6>Number of single rooms</h6></label>
    <input type="int" placeholder="Single rooms count" name="single_rooms" id="" required onChange={(e) => {
            setSingle_rooms(e.target.value);
            }}></input>

    <label htmlFor="email"><h6>Number of double rooms</h6></label>
    <input type="int" placeholder="Double rooms count" name="double_rooms" id="" required onChange={(e) => {
            setDouble_rooms(e.target.value);
            }}></input>

    <label htmlFor="email"><h6>Number of family rooms</h6></label>
    <input type="int" placeholder="Family rooms count" name="family_rooms" id="" required onChange={(e) => {
            setFamily_rooms(e.target.value);
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

export default Hotel_room;
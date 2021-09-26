//import React, { Component } from "react";
import React, {useState,useEffect} from "react";
import '../css/hotel_food.css'
import Axios from 'axios';
import { Link } from 'react-router-dom';


function Hotel_food(){
    const [breakfast_menue,setBreakfast_menue] = useState("");
    const [lunch_menue, setLunch_menue] = useState("");
    const [dinner_menue, setDinner_menue] = useState("");   
    const [dessert_enue,setDessert_enue] = useState("");
    const [user_id,setUser_id] = useState("");
    const [juices, setJuices] = useState("");
  
  
    const submitReview = () => {
        Axios.post('http://localhost:5000/hotel/food_detail', {
          
        breakfast_menue:breakfast_menue, 
        lunch_menue:lunch_menue,
        dinner_menue:dinner_menue,
        juices:juices,
        dessert_enue:dessert_enue,
        user_id:user_id,        
        }).then( () => {
  
            alert("successfull insert");
        });
    };
    return(

        <div className="Hotel_food">  

            <div className="Food_picture">
            <img className="Pic_size" src='/food/polon_food1.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/food/five.jpg' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/food/anu_food2.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/food/six.jpg' alt="" width="275" height="250"></img>

            <img className="Pic_size" src='/food/seven.jpg' alt="" width="295" height="250"></img>

            <img className="Pic_size" src='/food/four.jpg' alt="" width="285" height="250"></img>

            <img className="Pic_size" src='/food/juice1.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/food/appa.jpg' alt="" width="280" height="235"></img>

            <img className="Pic_size" src='/food/koththu.jpg' alt="" width="302" height="235"></img>



            </div>

       
<form>
<div className="Food_de">
    <center><h1>Hotel's Food Details</h1></center>
    <p>Please fill  hotel's food details.</p>
    <hr></hr>

    <label htmlFor="email"><h6>Breakfast Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="breakfast_menue" id="" required onChange={(e) => {
            setBreakfast_menue(e.target.value);
            }}></input>
    
    <label htmlFor="email"><h6>Lunch Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's lunch menus" name="lunch_menue" id="" required onChange={(e) => {
            setLunch_menue(e.target.value);
            }}></input>

    <label htmlFor="email"><h6>Dinner Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's dionner menus" name="dinner_menue" id="" required onChange={(e) => {
            setDinner_menue(e.target.value);
            }}></input>

    <label htmlFor="email"><h6>Juices</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="juices" id="" required onChange={(e) => {
            setJuices(e.target.value);
            }}></input>

    <label htmlFor="email"><h6>Dessert Menue</h6></label>
    <input type="text" placeholder="Enter your hotel's breaksast menus" name="dessert_enue" id="" required onChange={(e) => {
            setDessert_enue(e.target.value);
            }}
            ></input>

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

export default Hotel_food;
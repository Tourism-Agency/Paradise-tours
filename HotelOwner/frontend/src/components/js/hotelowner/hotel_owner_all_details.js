import React, { Component,useState, useEffect } from "react";
import '../../css/hotelowner_all_details.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Hotel_owner_all_details(){

    const [HoteldataList, setHoteldataList] = useState([]);
    const [Account_detailsList, setAccount_detailsList] = useState([]);
    const [BookedDateList, setBookedDateList] = useState([]);

    const [bookeddate,setBookeddate] = useState("");
    const [user_id,setUser_id] = useState("");

    const ShowDetails = () => {
        Axios.get('http://localhost:5000/hotel/show').then( (response) => {
    
           setHoteldataList(response.data);
        });
    };

    const ShowBankAccountDetails = () => {
        Axios.get('http://localhost:5000//hotel/showAccount_details').then( (response) => {

          setAccount_detailsList(response.data);
        });
    };

    const ShowBookedDateDetails = () => {
        Axios.get('http://localhost:5000/hotel/hotel_booking').then( (response) => {
    
           setBookedDateList(response.data);
        });
    };

/*   
const updateNowHotelDetails = () => {
        Axios.put("http://localhost:3001/hotel/hotel_detail_update_date", {bookeddate:bookeddate}).then( (response) => {
    
            alert("Updated");
        });
    };

    const updateNowAccountDetails = () => {
        Axios.put("http://localhost:3001/hotel/Account_details_update_date", {bookeddate:bookeddate}).then( (response) => {
    
            alert("Updated");
        });
    };

    const updateNowBookedDate = () => {
        Axios.put("http://localhost:3001/hotel/booked_date_update_date", {bookeddate:bookeddate}).then( (response) => {
    
            alert("Updated");
        });
    };
*/
const updateNow = () => {
    Axios.put("http://localhost:5000/hotel/update_date", {bookeddate:bookeddate}).then( (response) => {

        alert("Updated");
    });
};    

    const deleteNow = (user_id) => {
        Axios.delete('http://localhost:5000/hotel/delete_date/3');
    };

   
/*
    function deleteNow(user_id) {
        Axios.get("http://localhost:3001/delete_date", {
            params: {
              user_id:user_id,
              
            },
          })
          .then((response) => {
            alert("Delete sucessfull.");
          });
      }
  */

    return(

        <div className="Monitor">

            <button onClick={ShowDetails} className= "All_button1" type="submit">Show My Hotel Details</button>
            
           
            <button onClick={ShowBookedDateDetails} className= "All_button2" type="submit">Show My Bank Account</button>
        <div className="All_details">
         

        {HoteldataList.map((val,key) => {

    return (
            <div className="Vehicle_data1">
                <br></br>
                <h1>My Hotel details</h1>
                <hr></hr>
                <form>
                <br></br>
                

                <label><h6>Number of All rooms: </h6><h4>{val.number_of_rooms}</h4></label>
            <input type="int"  placeholder="You can edit your hotel"></input>



                <label><h6>Number of single rooms: </h6><h4>{val.single_rooms}</h4></label>
            <input type="int" placeholder="You can edit your hotel details"></input>

              
                <label><h6>Number of double rooms: </h6><h4>{val.double_rooms}</h4></label>
            <input type="int" placeholder="You can edit your hotel details"></input>



                <label><h6>Number of family rooms: </h6><h4>{val.family_rooms}</h4></label>
            <input type="int" placeholder="You can edit your hotel details"></input>

                <label><h6>One day charge for single room: </h6><h4>Rs. {val.price_single_room}</h4></label>
            <input type="text" placeholder="You can edit your hotel details"></input>

                
                <label><h6>One day charge for double room: </h6><h4>Rs.{val.price_double_room}</h4></label>
            <input type="text" placeholder="You can edit your hotel details"></input>

        
            <label><h6>One day charge for family room: </h6><h4>Rs.{val.price_family}</h4></label>
            <input type="text" placeholder="You can edit your hotel details"></input>

            <label><h6>Food charge for one pasenger with one day: </h6><h4>Rs.{val.food_charge}</h4></label>
            <input type="int" placeholder="You can edit your hotel details"></input>

            <label><h6>breakfast_menue: </h6><h4>{val.breakfast_menue}</h4></label>
            <input type="int" placeholder="You can edit your hotel details"></input>

                <label><h6>lunch_menue: </h6><h4> {val.lunch_menue}</h4></label>
            <input type="text" placeholder="You can edit your hotel details"></input>

                
                <label><h6>dinner_menue: </h6><h4>{val.dinner_menue}</h4></label>
            <input type="text" placeholder="You can edit your hotel details"></input>

        
            <label><h6>juices: </h6><h4>{val.juices}</h4></label>
            <input type="text" placeholder="You can edit your hotel details"></input>

            <label><h6>dessert_menue: </h6><h4>{val.dessert_enue}</h4></label>
            <input type="int" placeholder="You can edit your hotel details"></input>

          
               
                <button  className="btn">Update</button>
                </form>
            </div>
           

    );

   /* <input value={val.user_id} type="hidden"></input>

    <button onClick={updateNowHotelDetails} className="Use_button">Update</button>
*/
}


)};

    <div className="Tt">

      
    {Account_detailsList.map((val,key) => {

return (
        <div className="Bank_data1">
            <br></br>
            <h1>My Bank Account Details</h1>
            <hr></hr>
            <form>
            <br></br>

            <label><h6>Accounter Name:</h6> <h4>{val.user_name}</h4></label>
        <input type="text" placeholder="You can edit your bank account details"></input>

            <label><h6>Bank Name :</h6> <h4>{val.bank_name}</h4></label>
        <input type="int"  placeholder="You can edit your bank account details"></input>

          
            <label><h6>Branch Name:</h6><h4>{val.branch_name}</h4></label>
        <input  type="text"  placeholder="You can edit your bank account details"></input>



            <label><h6>Account Number: </h6> <h4>{val.account_number}</h4></label>
        <input type="text"  placeholder="You can edit your bank account details"></input>

      
            <button className="Use_button">Update</button>
           
            </form>
        </div>
       

);

/*<input value={val.user_id} type="hidden"></input>

<button onClick={updateNowAccountDetails} className="Use_button">Update</button>
*/
}


)};


    </div>




    <div className="Tt">

      
    {BookedDateList.map((val,key) => {

return (
    <div className="Bank_data2">
    <br></br>
    <h1>My Bank Account Details</h1>
    <hr></hr>
    <form>
    <br></br>

    <label><h6>Call for booking:</h6> <h4>{val.contact_number}</h4></label>
<input type="int" placeholder="You can edit your contact number"></input>

    <label><h6>Using web, for booking:</h6> <h4>{val.booking_webside}</h4></label>
<input type="text"  placeholder="You can edit your booking website"></input>

  
    <label><h6>My hotel website:</h6><h4>{val.hotel_webside}</h4></label>
<input  type="text"  placeholder="You can edit your hotel website"></input>



    <button className="btn2">Update</button>
   
    </form>
</div>

);

}


)};


    </div>
 



        </div>

       
        </div>


    );


}

export default Hotel_owner_all_details;
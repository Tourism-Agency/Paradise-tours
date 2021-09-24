import React, { Component } from "react";
import './guide.css'
import './hotel_food.css'
import { Link } from 'react-router-dom';


export default class Guide extends Component {
    render() {
        return (
          
          <body>
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpeg' alt="" width="240" height="235"></img>
          

                    <div className="Data">
                      <br></br>
                      <h3>First Name:Saif </h3>
                      <h4>Last Name:Humaid </h4>
                      <h5>Guide</h5>
                    </div>
        
                    <br></br>
                    
                    <Link to='/guide_editprofile'><h6>Edit Profile </h6></Link>
                    <Link to='/booking_requests'><h6>Booking Requests</h6></Link>
                    <Link to='/guide_currentbookings'><h6>Current Bookings</h6></Link>
                    <Link to='/guide_pastbookings'><h6>Booking History</h6></Link>
                    <Link to='/guide_updateuserinfo'><h6>Update UserInfo</h6></Link>
                    <Link to='/guide_updateavailability'><h6>Update Availability</h6></Link>
                    <Link to='/guide_message'><h6>Message</h6></Link>
                    <Link to='/logout'><h6>Logout</h6></Link>

            </div>  
           
            
                  <div className="Hotel_food">  

                              <div className="Food_picture">
                                    <img className="Pic_size" src='imgg12.jfif' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg2.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg3.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg4.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg10.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg6.jfif' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg11.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg8.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg9.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg17.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg7.jpg' alt="" width="290" height="250"></img>

                                    <img className="Pic_size" src='imgg1.jpg' alt="" width="290" height="250"></img>



                                  </div>

           
        
            </div>
        
            </div>

        
        
            </body>

        );
        }
    }
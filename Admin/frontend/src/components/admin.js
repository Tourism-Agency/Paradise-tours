
import React, { Component } from "react";
import './admin2.css';


import { Link } from 'react-router-dom';
// import LoggedNavbar from "./LoggedNavbar";




export default class Admin extends Component {




    render() {
        return (
          
         
            
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h3>First Name:Vinoji</h3>
                      <h4>Last Name: Sureshkumar</h4>
                      <h5>Admin</h5>
                    </div>
        
                    <br></br>
                    
                    <Link to='/admin_editprofile'><h6>Edit Profile </h6></Link>
                    
                    <Link to='/managepackages/manage_package'><h6>Manage Packages</h6></Link>
                    <Link to='/bookings/pending_bookings'><h6>Pending Bookings</h6></Link>
                    <Link to='/bookings/current_bookings'><h6>Current Bookings</h6></Link>
                    <Link to='/bookings/rejected_bookings'><h6>Rejected Bookings</h6></Link>
                    <Link to='/bookings/booking_history'><h6>Booking History</h6></Link>
                    <Link to='/view_feedback'><h6>Feedback</h6></Link>
                    <Link to='/view_message'><h6>Messages</h6></Link>
            </div>  
           
                <div className="Second">
        
        
                  <Link to='/manageuser/view_customer'>
                  <img className="Size" src='customer.jpg' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/manageuser/view_guide'>
                  <img className="Size" src='guide.jpg' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/manageuser/view_hotel'>
                  <img className="Size" src='hotel.png' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/manageuser/view_transport'>
                  <img className="Size" src='transport.jpg' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/manageuser/view_admin'>
                  <img className="Size" src='admin.jpg' alt="" width="280" height="252"></img>
                  </Link>
                
                
        
                  
                
        
                  
        
                 
                  </div> 
            
           
        
            </div>
        
        
        
        


        );
        }
    }
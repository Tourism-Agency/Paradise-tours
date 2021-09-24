  
import React, { Component } from "react";
import './admin.css'
import { Link } from 'react-router-dom';


export default class ManageUser extends Component {
    render() {
        return (
  /*
            <div className="Extra"> 
    
     
            <div className="Impo">
        
            <img className="Profile" src='profile.jpg' alt="" width="240" height="235"></img>
                 
                    <div className="Data">
                      <br></br>
                      <h3>First Name:</h3>
                      <h4>Last Name:</h4>
                      <h5>Admin</h5>
                    </div>
        
                    <br></br>
                    
                    <Link to='/admin_editprofile'><h6>Edit Profile </h6></Link>
                    <Link to='/manageuser/manageruser'><h6>Manage Users</h6></Link>
                    <Link to='/managepackages/manage_package'><h6>Manage Packages</h6></Link>
                    <Link to='/bookings/manage_bookings'><h6>Manage Bookings</h6></Link>
                    <Link to='/view_feedback'><h6>Feedback</h6></Link>
                    <Link to='/view_message'><h6>Messages</h6></Link>
                    <Link to='/view_ratings'><h6>View Ratings</h6></Link>
                    <Link to='/logout'><h6>Logout</h6></Link>
            </div>  
           */
                <div className="Second">
        
        
                  <Link to='/view_customer'>
                  <img className="Size" src='customer.jpg' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/view_guide'>
                  <img className="Size" src='guide.jpg' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/view_hotel'>
                  <img className="Size" src='hotel.png' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/view_transport'>
                  <img className="Size" src='transport.jpg' alt="" width="280" height="252"></img>
                  </Link>
                  <Link to='/view_admin'>
                  <img className="Size" src='admin.jpg' alt="" width="280" height="252"></img>
                  </Link>
                
                
        
                  
                
        
                  
        
                 
                  </div> 
            
        
        
        


        );
        }
    }
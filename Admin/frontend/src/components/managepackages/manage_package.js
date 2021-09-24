import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import './manage_package_first.css';
import { Link } from 'react-router-dom';
import usePackages from "../../hooks/usePackages";


function Package(){
const history = useHistory();
const [bookingData, setBookingData] = useState([]);
const {data: packageData} = usePackages();

useEffect(()=>{
  if(packageData){
    setBookingData([...packageData])
  }
},[packageData])

  
  return(
    

          <div className="A"> 
     
          <div className="B">
  
          
            <div className='C'>
             <img className="Photo" src='/temple.jpg' alt="" width="245" height="210"></img>
              <div className="C-part">
  
              <img className="Photo" src='/two.jpg' alt="" width="235" height="220"></img>
              </div>
            </div>
  
            <div className='E'>
            <img className="Photo" src='/beach.jpg' alt="" width="240" height="230"></img>
  
              <div className="E-part">
              <img className="Photo" src='/Heritage.jpg' alt="" width="230" height="210"></img>
  
              </div>
            </div>
            
            <div className="F">
            <img  className="Photo" src='/three.jpg' alt="" width="270" height="230"></img>
  
              <div className="F-part">
              <img className="Photo" src='/six.jpg' alt="" width="240" height="210"></img>
  
              </div>
  
  
            </div>
            
          
  
  
           <div className="D">
             
      <div className="container">
     
      <div className="hero-box">
      
     
          <label htmlFor=""><h2>View Packages</h2></label>
          <div className="btn-container">
          <button onClick={()=>{
              history.push({
               state: {
               },
               pathname: `add-package`,
             });
           }}>ADD PACKAGE</button>
          {bookingData.map(({package_id})=>{
            return <button onClick={()=>{
              history.push({
               state: {
                 data:{
                   packageId:package_id
                 }
               },
               pathname: `package-details`,
             });
           }}>Package - {package_id} </button>
          })

          }  
          </div>
      </div>
  </div>
  
            
            </div>
  
      </div>
    
  
      </div>
  
  
  
);

}

export default Package;

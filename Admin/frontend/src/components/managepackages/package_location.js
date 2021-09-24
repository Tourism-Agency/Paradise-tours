import React, { useState,useEffect } from "react";
import './package-location.css'
import { Link } from 'react-router-dom';
import usePackageLocation from "../../hooks/usePackageLocation";


const Packagelocation=({location: {
    state: {
      data: { packageId },
    },
  }})=>{
    const [locationData, setLocationData] = useState([]);
    const {data: packageLocationData} = usePackageLocation({id:packageId});
    console.log('locationData',locationData);

    useEffect(()=>{
        if(packageLocationData){
          setLocationData([...packageLocationData])
        }
      },[packageLocationData])

return(

    <div className="Locations">
        <br></br>
    <Link to='/maps'><h5 style={{color:"#fff",marginLeft:"40px"}}>Get Map of locations</h5></Link>
    {locationData.map((place,id)=>{
        return    <><h1>{id+1 + ' ' + place?.place_name}</h1>
        <br></br>
        <div className="Sigiriya">
            <img className="Picture" src='/sigiriya.jpg' alt="" width="260" height="200"></img>
            <div className="Sigiriya-des">
            {place?.place_description}
            </div>
            
        </div>
        </>
    })}

 </div>


);

}
export default Packagelocation;
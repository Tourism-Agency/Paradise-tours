
import React, { useEffect,useState } from "react";
import './package_hotels.css';

import usePackageHotel from "../../hooks/usePackageHotel";

const Packagehotels=({location: {
  state: {
    data: { packageId },
  },
}})=>{
  const [locationData, setLocationData] = useState([]);
  const {data: packageLocationData} = usePackageHotel({id:packageId});

  useEffect(()=>{
    if(packageLocationData){
      setLocationData([...packageLocationData])
    }
  },[packageLocationData])

    return(
      <div className="Monitor">
        {locationData.map((hotel)=>{
          return         <div className="Hotel">

              <div className="Hotel_details">
                <div className="Day">
                  <h1>{hotel?.date_no}</h1>
                  <h4>Hotel Name: {hotel?.hotel_name}</h4><br></br>
                  <h4> Hotel Description:</h4>
                  {hotel?.description}
                  <br></br><br></br>
                  <h5>More Details:<a href="">{hotel?.more_details}</a></h5>
                  
                </div>
              </div>

              <div className="Hotel_images">

              <img className="Hotel_size" src='/hotel/sigiriya_hotelnew.jpg' alt="" width="495" height="240"></img>
              <img className="Hotel_size" src='/hotel/sigiriya location.jpg' alt="" width="195" height="240"></img>
              <img className="Hotel_size" src='/hotel/sigiriya_hotel_room.jpg' alt="" width="260" height="195"></img>
              
              <img className="Hotel_size" src='/hotel/sigiriya_food.jpg' alt="" width="280" height="220"></img>
              <img className="Hotel_size" src='/hotel/sifiriya_food2.jpg' alt="" width="175" height="225"></img>

              </div>
              


          </div>
        })}
   

      </div>   

    );

}

export default Packagehotels;
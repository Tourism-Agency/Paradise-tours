import React, { useEffect,useState } from "react";
import './package-details.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import usePackageLocation from "../../hooks/usePackageLocation";
import usePackage from "../../hooks/usePackage";
import Button  from "@material-ui/core/Button";

 const Packagedetails =({location: {
  state: {
    data: { packageId },
  },
}})=> {
  const history = useHistory();
  const [locationData, setLocationData] = useState([]);
  const [packageDetail, setPackageDetail] = useState({});
  const {data: packageLocationData} = usePackageLocation({id:packageId});
  const {data: packageData} = usePackage({id:packageId});

  useEffect(()=>{
    if(packageLocationData){
      setLocationData([...packageLocationData])
    }
  },[packageLocationData])

  useEffect(()=>{
    if(packageData){
      setPackageDetail({...packageData})
    }
  },[packageData])

      return (    
     
        <div className="Start">

                <div className="Package-details">

                <img className="Image-size" src='/sigiriya3.jpg' alt="" width="240" height="210"></img>
                <img className="Image-size" src='/polonnaruwa.jpg' alt="" width="230" height="210"></img>
                <img className="Image-size" src='/hortan.jpg' alt="" width="210" height="225"></img>
                <img className="Image-size" src='/waterfall02.jpg' alt="" width="235" height="215"></img>
                <img className="Image-size" src='/atamasthanaya.jpg' alt="" width="230" height="225"></img>
                <img className="Image-size" src='/athugala.jpg' alt="" width="200" height="225"></img>

              </div>
                <div className="Places-image">
                <h3>Package No: {packageId}</h3>
                <h5>Visit Places:</h5>
                <div  className="List_package">
                <ul>
                  {locationData.map(({place_name})=>{
                    return <li><h6>{place_name}</h6></li>
                  })}
                </ul>
                </div>
                <h5>Day Duration: {packageDetail.time_limit}</h5>
              
      

                <h5>Price for one passenger: 450$</h5>


                <Button params={{packageId:packageId}} onClick={()=>{
                  history.push({
                    state: {
                      data:{
                        packageId:packageId
                      }
                    },
                    pathname: `package_location`,
                  });
                }}><h5>Locations</h5></Button>
                <Button params={{packageId:packageId}} onClick={()=>{
                  history.push({
                    state: {
                      data:{
                        packageId:packageId
                      }
                    },
                    pathname: `package_hotels`,
                  });
                }}><h5>Hotel Facilities</h5></Button>
              
              <br></br>
              <Link to="/add_package"><button className="Btn1" type="button"><h6>ADD </h6></button></Link>
              <Link to="/edit_package"><button className="Btn1" type="button"><h6>EDIT</h6></button></Link>
              <Link to="/delete_package"><button className="Btn1" type="button"><h6>DELETE</h6></button></Link>
              

                </div>

                
                </div>
   
         );

}

export default Packagedetails
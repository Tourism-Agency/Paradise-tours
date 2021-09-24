import React, { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from 'reactstrap';
import AddPackageDetails from './add_package_details';
import useHotels from '../../hooks/useHotels';
import Attachment from '../Attachment';




const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  block: {
    paddingTop: '36px',
  },
  section: {
    paddingTop: '20px',
  },
  root: {
    margin:'0px !important'
  },
  cancelButton: {
    width:'150px',
    marginRight:"30px"
  },
  submitButton: {
    width:'150px'
  },
}));

const AddPackage = () => {
  const counter = useRef(1);
  const classes = useStyles();
  const [hotels,setHotels]=useState([]);
  const [images,setImages]=useState([]);
  const [projectDetails,setProjectDetails]=useState([{id:counter}]);
  const {data: hotelData} = useHotels();
  console.log('imagesssssssssssssss',images);

  useEffect(()=>{
    if(hotelData){
      const result=hotelData.map(({hotel_id,hotel_name})=>{
        const newHotel={
          id:hotel_id,
          name:hotel_name
        }
        return newHotel
      })
      setHotels([...result])
    }
  },[hotelData])

  const handleAddDetails = () => {
    setProjectDetails([...projectDetails,{ id:counter.current++}])
  }

  const handleRemove = (projectId) =>{

    const result = projectDetails.filter(({id})=>id!==projectId)
    setProjectDetails([...result]);
  }

  return (
      <Grid container style={{padding:"20px 100px",backgroundColor:"white", flexDirection: 'column',width:"100%"}}>
        <Grid item className={classes.root}>
          <h3 className={classes.root}>Add Package</h3>
        </Grid>

        <Grid item className={classes.block} xs={6}>
          <span >
            Package Name 
          </span>
          <div>
          <input type="text"  className={classes.root} placeholder="Enter package name" name="nic" id=""  required></input>
          </div>
          {images.map(image=>{
            return <div>{image}</div>
          })}
        </Grid>
        <Grid item xs={6} className={classes.section} >
          <span >
            Package Images 
          </span>
          <div>
            {/* <input type="file" multiple className={classes.root} placeholder="file" name="nic" id="" onChange={(e)=>{console.log(e.target.files ); setImages([...images,e.target.files])}} required></input> */}
          <Attachment/>
          </div>
        </Grid>
        <div style={{paddingTop:'20px'}}>
          <h5 className={classes.root}>Package details</h5>
        </div>
        {projectDetails.map(({id},index)=>{
          return (
            <AddPackageDetails handleAddDetails={handleAddDetails} options={hotels} index={index} id={id} handleRemove={handleRemove} length={projectDetails.length}/>
          )
        })}
        <Grid item xs={6} className={classes.section} >
          <span >
            Day Duration
          </span>
          <div>
            <input type="text" className={classes.root} placeholder="Enter duration" name="nic" id="" required></input>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.section} >
          <span >
            Price for one passenger
          </span>
          <div>
            <input type="text" className={classes.root} placeholder="Enter price for passenger" name="nic" id="" required></input>
          </div>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={12} className={classes.section} >
          <Button className={classes.cancelButton} >Cancel</Button>
          <Button className={classes.submitButton}>Submit</Button>
        </Grid>
      </Grid>
  );
};

export default AddPackage;

import React, { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from 'reactstrap';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



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
}));

const AddPackageDetails = ({handleAddDetails,options,index,id,handleRemove,length}) => {
  const classes = useStyles();
  const [hotel,setHotel]=useState("");
  const [expand,setExpand]=useState(true);

  return (
    <Accordion expanded={expand} onChange={()=>{setExpand(!expand)}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography className={classes.heading}>Detail-{index+1}</Typography>
                  {length>1 && index !==0 ? <IconButton aria-label="delete" color='secondary' onClick={(e)=>{e.stopPropagation(); handleRemove(id);}}>
                    <DeleteIcon />
                  </IconButton>:null}
                  
                  </Grid>
              </AccordionSummary>
              <AccordionDetails>
              <Grid container item className={classes.section} >
          <Grid item xs={6}>
            <span >
              Day
            </span>
            <div>
              <input type="text" className={classes.root} placeholder="Enter day" name="nic" id="" required></input>
            </div>
          </Grid>
          <Grid item xs={6}>
            <span >
              Place
            </span>
            <div>
              <input type="text" className={classes.root} placeholder="Enter place" name="nic" id="" required></input>
            </div>
          </Grid>
          <Grid item xs={6} style={{paddingTop:'20px'}}>
            <span >
              Hotel
            </span>
            <div>
              <FormControl style={{width:"680px"}} size='small'>
              <Select
                placeholder="Select hotel"
                onChange={(e)=>{setHotel(e.target.value)}}
                value={hotel}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {options.map((item, index) => (
                  <MenuItem
                    key={index}
                    value={item.value ? item.value : item.name}
                  >{item.name}</MenuItem>
                  ))}
              </Select>
              </FormControl>
            </div>
          </Grid>
          {index===0 ? 
          <Grid item xs={6} style={{paddingTop:'20px'}}>
            <div>
              <Button onClick={handleAddDetails}>Add more...</Button>
            </div>
          </Grid>:null}
          
        </Grid>
              </AccordionDetails>
            </Accordion>
  );
};

export default AddPackageDetails;

import React, { useState,useEffect } from "react";
import styles from './booked_date.css';

import useCreateGuide from "../hooks/useCreateGuide";
import { useSnackbar } from 'notistack';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import useMessages from "../hooks/useMessages";
import AlertDialog from './alertDialog';
import useDeleteMessage from "../hooks/useDeleteMessage";
import useGuides from "../hooks/useGuides";
import useDeleteAvailability from "../hooks/useDeleteAvailability";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(GuideId,Message, Response ) {
  return {GuideId, Message, Response};
}

const rows = [
  createData('1', 'test', 'repsonse'),
  createData('2', 'message', 'repsonse'),
  createData('3', 'Please', 'repsonse'),
];

const styleTables = makeStyles({
  table: {
    //maxWidth: 520,
  },
});

const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 const GuideBookedDate=()=>   {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const { enqueueSnackbar } = useSnackbar();
  const [availability, setAvailability] = useState();
  const { mutateAsync: guideCreater,isError } = useCreateGuide();
  const [openAlert, setOpenAlert] = useState(false);
  const [id, setId] = useState('');
  const { mutateAsync: userDeleter } = useDeleteAvailability(id);
  const {data: MessageData} = useGuides();
  const [bookingData, setBookingData] = useState([]);

  useEffect(()=>{
    if(MessageData){
      setBookingData([...MessageData])
    }
  },[MessageData])

  const handleAlertClose=()=>{
    setOpenAlert(false);
  }

  const handleOkAccept = async()=>{
    try{  
      await userDeleter();
      window.location.reload();
      handleAlertClose();
    }catch(e){
      console.log(e);
    }
  }

  const handleGuide=async()=>{
    const newGuide={
      service_charge:'2000',
      availability,
      user_id:'2'
    }
    try{
      await guideCreater(newGuide);
      if(!isError){
        window.location.reload();
        setAvailability('')
        enqueueSnackbar('Guide details added successfully', {
          variant: 'success',
          autoHideDuration: 3000,
        })
      }
    }catch(e){
      enqueueSnackbar('Guide details add failed', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    }
  }
   
        return (
                <body>
                <div className="Date_update">
               
                <div className={styles.container}>
                <center><h1>Booked Date Details</h1></center>
                <p>Please update your hayer booked date details.</p>
                <hr></hr>

                <label htmlFor="email"><h6>Booked Date</h6></label>
                <input type="date" placeholder="Enter the booked date" name="bookedDate" id="" value={availability} required onChange={(e)=>{setAvailability(e.target.value)}}></input>

                
                <hr></hr>

                <button type="submit" className="registerbtn" onClick={handleGuide}>Submit</button>
                </div>

                </div>
                <div style={{padding:"0px 400px"}}>
                <TableContainer component={Paper} style={{width:"",marginTop:"120px"}}>
                  <h1>Available dates</h1>
                    <Table className={tableClass.table} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                        <StyledTableCell>Id</StyledTableCell>
                          <StyledTableCell>Date</StyledTableCell>
                          <StyledTableCell align="left">Manage</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bookingData.map((row,index) => (
                          <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                              {row.guide_id}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {row.availability.substring(0,10)}
                            </StyledTableCell>
                            <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary" onClick={()=>{setId(row.guide_id); setOpenAlert(true);}} >Delete</Button></div></StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <AlertDialog open={openAlert} title="Do you want to delete this date ?" handleClose={handleAlertClose} handleOk={handleOkAccept}/>
                  </div>
                </body>

        );
        }

export default GuideBookedDate;
import React ,{useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useBookings from '../hooks/useBookings';
import useUpdateBooking from '../hooks/useUpdateBooking';
import AlertDialog from './alertDialog';
import format from 'date-format'
import usePackage from '../hooks/usePackage';
import {
   packageIdFetchSuccess
} from '../state/packageId/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectPackageId } from '../state/packageId/selector';
import usePackageHotel from '../hooks/usePackageHotel';
import usePackageLocation from '../hooks/usePackageLocation';
import usePackageTranspost from '../hooks/usePackageTransport';


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

function createData(BookingID, CustomerID, name, email, mobile, duration, packagedetails ) {
  return { BookingID, CustomerID, name, email, mobile, duration, packagedetails };
}



const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function BookingRequests() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const dispatch = useDispatch();
  const cachedPackageId = useSelector(selectPackageId);
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openAlertReject, setOpenAlertReject] = useState(false);
  const [bookingData, setBookingData] = useState([]);
  const [rowData, setRowData] = useState({});
  const [projectId, setProjectId] = useState('');
  const [hotelData, setHotelData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [transportData, setTransportData] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const {data: bookData} = useBookings({id:2,status:'pending'});
  const {data: packageData} = usePackage({id:projectId})
  const {data: packageHotelData} = usePackageHotel({id:projectId})
  const {data: packageLocationData} = usePackageLocation({id:projectId})
  const {data: packageTransportData} = usePackageTranspost({id:projectId})
  const { mutateAsync: bookingUpdater } = useUpdateBooking(rowData.bookingID);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRelectAlert = () => {
    setOpenAlertReject(false);
  };

  
  useEffect(()=>{
    if(bookData){
      setBookingData([...bookData])
    }
  },[bookData])

  useEffect(()=>{
    if(packageLocationData){
      setLocationData([...packageLocationData])
    }
  },[packageLocationData])

  useEffect(()=>{
    if(packageHotelData){
      setHotelData([...packageHotelData])
    }
  },[packageHotelData])

  useEffect(()=>{
    if(packageTransportData){
      setTransportData([...packageTransportData])
    }
  },[packageTransportData])

  const handleOkAccept = async()=>{
    try{
      const newBooking={
        ...rowData,
        date:rowData.date.substring(0,10),
        booked_date:rowData.booked_date.substring(0,10),
        guide_status:'accepted',
      }
  
      await bookingUpdater(newBooking);
      window.location.reload();
      handleAlertClose();
    }catch(e){
      console.log(e);
    }


  }

  const handleOkReject = async()=>{
    try{
      const newBooking={
        ...rowData,
        date:rowData.date.substring(0,10),
        booked_date:rowData.booked_date.substring(0,10),
        guide_status:'rejected',
        booking_status:'rejected'
      }
  
      await bookingUpdater(newBooking);
      window.location.reload();
      handleCloseRelectAlert();
    }catch(e){
      console.log(e);
    }


  }

  const handleAlertClose=()=>{
    setOpenAlert(false);
  }

  const handleReset=()=>{
    setHotelData([]);
    setLocationData([]);
    setTransportData([]);
  }

  //dispatch(packageIdFetchSuccess({ packageId:row.packageID })); 

  // <h1>View Customer Details</h1>
  return (
    <>
    <TableContainer component={Paper} width="100%">
    <h1>Booking Requests</h1>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>BookingID</StyledTableCell>
            <StyledTableCell align="left">CutomerID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            <StyledTableCell align="left">Duration</StyledTableCell>
          
            <StyledTableCell align="left">PackageDetails</StyledTableCell>
            <StyledTableCell align="left">Accept</StyledTableCell>
            <StyledTableCell align="left">Reject</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingData.map((row) => (
            <StyledTableRow key={row.bookingID}>
              <StyledTableCell component="th" scope="row">
                {row.bookingID}
              </StyledTableCell>
              <StyledTableCell align="left">{row.customerID}</StyledTableCell>
              <StyledTableCell align="left">{row.first_name +' '+ row.last_name}</StyledTableCell>
              <StyledTableCell align="left">{row.email_address}</StyledTableCell>
              <StyledTableCell align="left">{row.phone_no}</StyledTableCell>
              <StyledTableCell align="left">{row.duration}</StyledTableCell>

             
            <Button onClick={()=>{if(row.packageID!==projectId) handleReset(); setProjectId(row.packageID); handleClickOpen();}}> <StyledTableCell align="left">View details</StyledTableCell> </Button>
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title2"
              aria-describedby="alert-dialog-description"
            >
              
                <DialogTitle id="alert-dialog-title">Package ID : {packageData?.package_id }</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Package Name:  <br></br>
                Places: {locationData.map(location=>{ return <div>- {location.place_name}</div>})} <br></br>
                Amount: <br></br>
                .................. <br></br>
                Hotels: {hotelData.map(hotel=>{ return <div>- {hotel.hotel_name}</div>})}<br></br>
                Transport owner: {transportData.map(({first_name,last_name})=>{ return <div>- {first_name+' '+last_name}</div>})}<br></br>
                </DialogContentText>
                </DialogContent>
                        
              <DialogActions>
                <Button onClick={handleClose} c
                olor="primary">
                  Close
                </Button>
              
              </DialogActions>
            </Dialog>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="primary" onClick={()=>{ setRowData({...row}); setOpenAlert(true)}}>
                Accept</Button></div>
                </StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary" onClick={()=>{ setRowData({...row}); setOpenAlertReject(true)}}>Reject</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AlertDialog open={openAlert} title='Do you want to accept this booking request?' handleClose={handleAlertClose} handleOk={handleOkAccept}/>
    <AlertDialog open={openAlertReject} title='Do you want to reject this booking request?' handleClose={handleCloseRelectAlert} handleOk={handleOkReject}/>
    </>
  );
}


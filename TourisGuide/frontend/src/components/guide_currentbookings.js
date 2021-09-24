import React,{useEffect, useState} from  'react';
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

function createData(BookingID, CustomerID, name, email, mobile, duration, packageName ) {
  return { BookingID, CustomerID, name, email, mobile, duration, packageName };
}

const rows = [
  createData('121', '7', 'dineshkumar', 'rajitha3@gmail.com', '0773456275', '09.08.2021-11.08.2021', 'Luxury'),
  createData('124', '13', 'vithusha karuna', 'vithusha54@gmail.com', '0774563275', '14.08.2021-17.08.2021', 'Silver'),
  createData('135', '18', 'ninthusha perera', 'ninthu7@gmail.com', '0745663275', '25.08.2021-27.08.2021', 'UpCountryTravel'),
];

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



export default function GuideCurrentBookings() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [bookingData, setBookingData] = useState([]);
  const [projectId, setProjectId] = useState('');
  const [hotelData, setHotelData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [transportData, setTransportData] = useState([]);
  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const {data: bookData} = useBookings({id:2,status:'accepted'});
  const {data: packageHotelData} = usePackageHotel({id:projectId})
  const {data: packageLocationData} = usePackageLocation({id:projectId})
  const {data: packageTransportData} = usePackageTranspost({id:projectId})

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

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset=()=>{
    setHotelData([]);
    setLocationData([]);
    setTransportData([]);
  }

  // <h1>View Customer Details</h1>
  return (
    <TableContainer component={Paper} width="100%">
    <h1>Current Bookings</h1>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>BookingID</StyledTableCell>
            <StyledTableCell align="left">CutomerID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            <StyledTableCell align="left">Duration</StyledTableCell>
          
            <StyledTableCell align="left">packageName</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          { bookingData.map((row) => (
            <StyledTableRow key={row.bookingID}>
              <StyledTableCell component="th" scope="row">
                {row.bookingID}
              </StyledTableCell>
              <StyledTableCell align="left">{row.customerID}</StyledTableCell>
              <StyledTableCell align="left">{row.first_name +' '+ row.last_name}</StyledTableCell>
              <StyledTableCell align="left">{row.email_address}</StyledTableCell>
              <StyledTableCell align="left">{row.phone_no}</StyledTableCell>
              <StyledTableCell align="left">{row.duration}</StyledTableCell>
              <Button onClick={()=>{if(row.packageID!==projectId) handleReset(); setProjectId(row.packageID); handleClickOpen();}}><StyledTableCell align="left">View details</StyledTableCell></Button>
              <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title2"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Package ID :"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                 Package Name: <br></br>
                 Places: {locationData.map(location=>{ return <div>- {location.place_name}</div>})} <br></br>
                Amount: <br></br>
                .................. <br></br>
                Hotels: {hotelData.map(hotel=>{ return <div>- {hotel.hotel_name}</div>})}<br></br>
                Transport owner: {transportData.map(({first_name,last_name})=>{ return <div>- {first_name+' '+last_name}</div>})}<br></br>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              
              </DialogActions>
            </Dialog>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


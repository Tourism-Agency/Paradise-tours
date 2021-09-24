import React,{useEffect,useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useUsers from '../../hooks/useUsers';
import useBooking from '../../hooks/useBooking';
import AlertDialog from '../alertDialog/alertDialog';
import useUpdateBooking from '../../hooks/useUpdateBooking';



const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

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

function createData(id, name, email, mobile, language, no_pending_bookings, payment, other) {
  return { id, name, email, mobile, language, no_pending_bookings, payment, other };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', 'English, Sinhala','3'),
  createData('2', 'Anuki Alwis', 'anukial@gmail.com', '0773456271', 'English, Tamil','0'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AdminAssignGuide({location: {
  state: {
    data
  },
}}) {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [userId, setUserId] = useState('');
  const [bookingData, setBookingData] = useState([]);
  const {data: customerData} = useUsers({role:'guide'});
  const [booking, setBooking] = useState({});
  const {data: bookData} = useBooking({id:data});
  const { mutateAsync: bookingUpdater } = useUpdateBooking(data);
  

  useEffect(()=>{
    if(customerData){
      setBookingData([...customerData])
    }
  },[customerData])

  useEffect(()=>{
    if(bookData){
      setBooking({...bookData})
    }
  },[bookData])

  const handleClickOpen = () => {
    setOpen(true);
  };

 

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose=()=>{
    setOpenAlert(false);
  }

  const handleOkAccept = async()=>{
    try{
      const newBooking={
        ...booking,
        date:booking.date.substring(0,10),
        booked_date:booking.booked_date.substring(0,10),
        guide_id:userId,
        guide_status:'assigned'
      }
  
      await bookingUpdater(newBooking);
      handleAlertClose();
    }catch(e){
      console.log(e);
    }
  }
 
  return (
    <TableContainer component={Paper} width="100%">
   
    <h1>Assign Guide</h1> 
   
  
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            <StyledTableCell align="left">Languages</StyledTableCell>
            <StyledTableCell align="left">No of Pending<br></br> bookings</StyledTableCell>
            
            <StyledTableCell align="left">ASSIGN</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingData.map((row) => (
            <StyledTableRow key={row.user_id}>
              <StyledTableCell component="th" scope="row">
                {row.user_id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.first_name+' '+row.last_name}</StyledTableCell>
              <StyledTableCell align="left">{row.email_address}</StyledTableCell>
              <StyledTableCell align="left">{row.phone_no}</StyledTableCell>
              <StyledTableCell align="left">{row.language}</StyledTableCell>
         
              <Button onClick={handleClickOpen}> <StyledTableCell align="left">{row.no_pending_bookings}</StyledTableCell> </Button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title2">{"Booking ID :"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              BookingID 1: <br></br>
               Package Name: <br></br>
               Duration: <br></br>
               .................. <br></br>
               BookingID 2: <br></br>
               Package Name: <br></br>
               Duration: <br></br>
               .................. <br></br>
               BookingID 3: <br></br>
               Package Name: <br></br>
               Duration: <br></br>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            
            </DialogActions>
          </Dialog>

              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" onClick={()=>{setUserId(row.user_id); setOpenAlert(true);}} color="primary">ASSIGN</Button></div></StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialog open={openAlert} title='Do you want to assign?' handleClose={handleAlertClose} handleOk={handleOkAccept}/>
    </TableContainer>
  );
}
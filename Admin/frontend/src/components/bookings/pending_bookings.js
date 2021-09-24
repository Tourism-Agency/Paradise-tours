import React,{useState,useEffect} from 'react';
import {useHistory } from 'react-router-dom';

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
import useBookings from '../../hooks/useBookings';


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

function createData(id, bookingID, date, customerID, packageID, booked_date, no_of_days, no_of_visitors, no_of_rooms, payment_status, guideID, transportID) {
  return { id, bookingID, date, customerID, packageID, booked_date, no_of_days, no_of_visitors, no_of_rooms, payment_status, guideID, transportID };
}

const rows = [
  createData('1', '23', '12/7/21', '234', '7', '19/7/21', '3', '4','2', '25% paid', '12', '4'),
  createData('2', '24', '12/7/21', '156', '11', '21/7/21', '4', '2', '1', '50% paid', '17', '65'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function PendingBookings() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const history = useHistory();
  const [open4, setOpen4] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [bookingData, setBookingData] = useState([]);

  const {data: bookData} = useBookings({status:'pending'});

  useEffect(()=>{
    if(bookData){
      setBookingData([...bookData])
    }
  },[bookData])
 

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

 
 
  return (
    <TableContainer component={Paper} width="100%">
   
    <h1>Pending Bookings</h1> 
   
 
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>BookingID</StyledTableCell>
            <StyledTableCell align="left"> date</StyledTableCell>
            <StyledTableCell align="left">CustomerID</StyledTableCell>
            <StyledTableCell align="left">Booked Date</StyledTableCell>
            <StyledTableCell align="left">PackageID</StyledTableCell>
    
            <StyledTableCell align="left">No of Days</StyledTableCell>
            <StyledTableCell align="left">Payment Status</StyledTableCell>
            <StyledTableCell align="left">No of visitors</StyledTableCell>
         
          
            <StyledTableCell align="left">Guide</StyledTableCell>
            <StyledTableCell align="left">No of rooms</StyledTableCell>
            <StyledTableCell align="left">Transport</StyledTableCell>
            <StyledTableCell align="left">ASSIGN</StyledTableCell>
            <StyledTableCell align="left">ASSIGN</StyledTableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
        {bookingData.map((row,id) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {id+1}
              </StyledTableCell>
              <StyledTableCell align="left">{row.bookingID}</StyledTableCell> 
            
                                               <StyledTableCell align="left">{row.date}</StyledTableCell>
            <Button onClick={handleClickOpen1}> <StyledTableCell align="left">{row.customerID}</StyledTableCell> </Button>
            <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title1"
        aria-describedby="alert-dialog-description1"
      >
        <DialogTitle id="alert-dialog-title1">{"Customer ID :"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
           Customer Name: <br></br>
           Email: <br></br>
           Mobile: <br></br>
           Address: <br></br>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Close
          </Button>
        
        </DialogActions>
      </Dialog>
          
           <StyledTableCell align="left">{row.booked_date}</StyledTableCell>


            <Button onClick={handleClickOpen2}> <StyledTableCell align="left">{row.packageID}</StyledTableCell> </Button>
            <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title2"
            aria-describedby="alert-dialog-description2"
          >
            <DialogTitle id="alert-dialog-title2">{"Package ID :"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description2">
               Package Name: <br></br>
               Places: <br></br>
               Amount: <br></br>
               .................. <br></br>
               Hotels: <br></br>
               Transport owner: <br></br>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2} color="primary">
                Close
              </Button>
            
            </DialogActions>
          </Dialog>


              <StyledTableCell align="left">{row.no_of_days}</StyledTableCell>

              <Button onClick={handleClickOpen4}><StyledTableCell align="left">Payment Status</StyledTableCell> </Button>
              <Dialog
          open={open4}
          onClose={handleClose4}
          aria-labelledby="alert-dialog-title4"
          aria-describedby="alert-dialog-description4"
        >
          <DialogTitle id="alert-dialog-title4">{"Payment ID :"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description4">
             Payment Details: <br></br>
             Status: <br></br>
             Amount Paid: <br></br>
             Date&Time: <br></br>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose4} color="primary">
              Close
            </Button>
          
          </DialogActions>
        </Dialog>

              <StyledTableCell align="left">{row.no_of_visitors}</StyledTableCell>
             
              <Button onClick={handleClickOpen3}><StyledTableCell align="left">{row.guide_id}</StyledTableCell></Button>
              <Dialog
            open={open3}
            onClose={handleClose3}
            aria-labelledby="alert-dialog-title3"
            aria-describedby="alert-dialog-description3"
          >
            <DialogTitle id="alert-dialog-title3">{"Guide ID :"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description3">
               Guide Name: <br></br>
               Email: <br></br>
               Mobile: <br></br>
            
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose3} color="primary">
                Close
              </Button>
            
            </DialogActions>
          </Dialog>


          <StyledTableCell align="left">{row.no_of_rooms}</StyledTableCell>


          <Button onClick={handleClickOpen5}><StyledTableCell align="left">{row.transport_id}</StyledTableCell></Button>
          <Dialog
        open={open5}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title5"
        aria-describedby="alert-dialog-description5"
      >
        <DialogTitle id="alert-dialog-title4">{"Transport ID:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description5">
           Transport Name: <br></br>
           Email: <br></br>
           Mobile: <br></br>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose5} color="primary">
            Close
          </Button>
        
        </DialogActions>
      </Dialog>
          
             
              <StyledTableCell align="left"> <div className={buttonClass.root}><Button variant="contained" color="primary" onClick={()=>{
                                  history.push({
                                    state: {
                                      data:row.bookingID
                                    },
                                    pathname: `/bookings/admin_assignguide`,
                                  });
              }}>GUIDE</Button></div></StyledTableCell>
              <StyledTableCell align="left"> <div className={buttonClass.root}><Button variant="contained" color="primary" onClick={()=>{
                                  history.push({
                                    state: {
                                      data:row.bookingID
                                    },
                                    pathname: `/bookings/admin_assigntransport`,
                                  });
              }}>TRANSPORT</Button></div> </StyledTableCell>
           
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
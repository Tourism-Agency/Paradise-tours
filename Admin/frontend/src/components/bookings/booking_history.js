import React from 'react';
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

function createData(id, bookingID, date, customerID,PackageName,  paymentID, guideID) {
  return { id, bookingID, date, customerID,PackageName,  paymentID, guideID };
}

const rows = [
  createData('1', '23', '12/7/21', '234','Sigiriya', '321', '4'),
  createData('2', '23', '12/7/21', '234','Sigiriya', '321', '4'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function BookingHistory() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [open4, setOpen4] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
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
   
    <h1>Booking History</h1> 
   
 
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>BookingID</StyledTableCell>
            <StyledTableCell align="left"> date</StyledTableCell>
            <StyledTableCell align="left">CustomerID</StyledTableCell>
            <StyledTableCell align="left">PackageName</StyledTableCell>
            <StyledTableCell align="left">PaymentID</StyledTableCell>
            <StyledTableCell align="left">GuideID</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.bookingID}</StyledTableCell> 
            
              <StyledTableCell align="left">{row.date}</StyledTableCell>

              <StyledTableCell align="left"><Button onClick={handleClickOpen1}> {row.customerID} </Button></StyledTableCell>
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
          


      <StyledTableCell align="left"><Button onClick={handleClickOpen2}> {row.PackageName} </Button></StyledTableCell>
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


          <StyledTableCell align="left"><Button onClick={handleClickOpen4}>{row.paymentID} </Button> </StyledTableCell>
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
             Date:<br></br>
             Total Amount: <br></br>
            Card Details: <br></br>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose4} color="primary">
              Close
            </Button>
          
          </DialogActions>
        </Dialog>

             

              <Button onClick={handleClickOpen3}><StyledTableCell align="left">{row.guideID}</StyledTableCell></Button>
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
               Address:<br></br>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose3} color="primary">
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
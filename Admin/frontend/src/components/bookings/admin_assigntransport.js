import React,{useState,useEffect} from 'react';
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
import useUsers from '../../hooks/useUsers';
import useBooking from '../../hooks/useBooking';
import useUpdateBooking from '../../hooks/useUpdateBooking';
import AlertDialog from '../alertDialog/alertDialog';


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

function createData(id, name, email, mobile, platenumber, seats, type, color, liecencevalid, payment, other) {
  return { id, name, email, mobile, platenumber, seats, type, color, liecencevalid, payment, other};
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', '1117','25', 'van', 'white', '2025.06.09', '2000/day', 'facilities'),
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', '1117','25', 'van', 'white', '2025.06.09', '2000/day', 'facilities'),
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', '1117','25', 'van', 'white', '2025.06.09', '2000/day', 'facilities'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TransportTables({location: {
  state: {
    data
  },
}}) {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [openAlert, setOpenAlert] = useState(false);
  const [userId, setUserId] = useState('');
  const {data: customerData} = useUsers({role:'transport owner'});
  const [bookingData, setBookingData] = useState([]);
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

  const handleAlertClose=()=>{
    setOpenAlert(false);
  }

  const handleOkAccept = async()=>{
    try{
      const newBooking={
        ...booking,
        date:booking.date.substring(0,10),
        booked_date:booking.booked_date.substring(0,10),
        transport_id:userId,
        transport_status:'assigned'
      }
  
      await bookingUpdater(newBooking);
      handleAlertClose();
    }catch(e){
      console.log(e);
    }
  }
 
  return (
    <TableContainer component={Paper} width="100%">
    <TableRow align = "left">
    <h1>View Transport Details</h1>


    </TableRow>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            <StyledTableCell align="left">Plate Number</StyledTableCell>
            <StyledTableCell align="left">No of Seats</StyledTableCell>
            <StyledTableCell align="left">TransportType</StyledTableCell>
            <StyledTableCell align="left">Color</StyledTableCell>
            <StyledTableCell align="left">Liecence Valid until</StyledTableCell>
            <StyledTableCell align="left">Payment</StyledTableCell>
            <StyledTableCell align="left">Other Details</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
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
              <StyledTableCell align="left">{row.platenumber}</StyledTableCell>
              <StyledTableCell align="left">{row.seats}</StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
              <StyledTableCell align="left">{row.color}</StyledTableCell>
              <StyledTableCell align="left">{row.liecencevalid}</StyledTableCell>
              <StyledTableCell align="left">{row.payment}</StyledTableCell>
              <StyledTableCell align="left">{row.other}</StyledTableCell>

              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" onClick={()=>{setUserId(row.user_id); setOpenAlert(true);}} color="primary">ASSIGN</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialog open={openAlert} title='Do you want to assign?' handleClose={handleAlertClose} handleOk={handleOkAccept}/>
    </TableContainer>
  );
}

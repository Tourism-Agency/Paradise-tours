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
import useUsers from '../../hooks/useUsers';
import useDeleteUser from '../../hooks/useDeleteUser';
import AlertDialog from '../alertDialog/alertDialog';



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

function createData(id, name, email, mobile) {
  return { id, name, email, mobile };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345'),
  createData('2', 'Anuki Alwis', 'anukial@gmail.com', '0773456271'),
  createData('3', 'Mahesh bala', 'balamahe22@gmail.com', '0773427654'),
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



 const CustomerTables=() =>{
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [bookingData, setBookingData] = useState([]);
  const {data: customerData} = useUsers({role:'customer'});

  const [openAlert, setOpenAlert] = useState(false);
  const [id, setId] = useState('');
  const { mutateAsync: userDeleter } = useDeleteUser(id);

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

  useEffect(()=>{
    if(customerData){
      setBookingData([...customerData])
    }
  },[customerData])
 

  return (
    <TableContainer component={Paper} width="100%">
    <TableRow align = "left">
    <h1>View Customer Details</h1>

    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left" margin="100px"></StyledTableCell>
   


    </TableRow>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            
            <StyledTableCell align="left">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingData.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.user_id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.first_name+' '+row.last_name}</StyledTableCell>
              <StyledTableCell align="left">{row.email_address}</StyledTableCell>
              <StyledTableCell align="left">{row.phone_no}</StyledTableCell>

              
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" onClick={()=>{setId(row.user_id); setOpenAlert(true);}} color="secondary">Delete</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialog open={openAlert} title="Do you want to delete this user ?" handleClose={handleAlertClose} handleOk={handleOkAccept}/>
    </TableContainer>
  );
}

export default CustomerTables;
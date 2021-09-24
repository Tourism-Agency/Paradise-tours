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



export default function BookingRequests() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();

  // <h1>View Customer Details</h1>
  return (
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
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.BookingID}>
              <StyledTableCell component="th" scope="row">
                {row.BookingID}
              </StyledTableCell>
              <StyledTableCell align="left">{row.CustomerID}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.mobile}</StyledTableCell>
              <StyledTableCell align="left">{row.duration}</StyledTableCell>
              <StyledTableCell align="left">{row.packagedetails}</StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="primary">Accept</Button></div></StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary">Reject</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



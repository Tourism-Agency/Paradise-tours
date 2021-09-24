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

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { Link } from 'react-router-dom';


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

function createData(id, name, email, feedback, other) {
  return { id, name, email, feedback, other };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', 'Hi there!', 'reid avenue, Colombo 07'),
  createData('2', 'Anuki Alwis', 'anukial@gmail.com', 'Wanna book packages!', 'rajarata, wayamba south'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function FeedbackTable() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <TableContainer component={Paper} width="100%">
    <h1>View Feedback</h1>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Feedback</StyledTableCell>
            <StyledTableCell align="left">Other</StyledTableCell>
            <StyledTableCell align="left">Reply</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.feedback}</StyledTableCell>
              <StyledTableCell align="left">{row.other}</StyledTableCell>


           
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="primary" onClick={handleClickOpen}>Reply</Button></div></StyledTableCell>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Respond to the Feedback</DialogTitle>
              <DialogContent>
                <DialogContentText>
                Express concern. Tell the customer that you appreciate their feedback and are concerned about the treatment they received or problem they're facing.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="feedback_rly"
                  label="Reply"
                  type="text"
                  fullWidth
                />
                <br></br>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Send
                </Button>
                <Button onClick={handleClose} color="primary">
                  Cancel
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
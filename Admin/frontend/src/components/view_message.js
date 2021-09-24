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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { Link } from 'react-router-dom';

import { useSnackbar } from 'notistack';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMessages from '../hooks/useMessages';
import useUpdateMessage from '../hooks/useUpdateMessage';


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

function createData(id, name, usertype, email, message, other) {
  return { id, name, usertype, email, message, other };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'guide', 'rajitha3@gmail.com', 'Hi there!', 'reid avenue, Colombo 07'),
  createData('2', 'Anuki Alwis', 'customer' , 'anukial@gmail.com', 'Wanna book packages!', 'rajarata, wayamba south'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function MessageTable() {
  const { enqueueSnackbar } = useSnackbar();
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [open, setOpen] = React.useState(false);
  const [messageId, setMessageId] = useState('');
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState({});

  const [bookingData, setBookingData] = useState([]);
  const { mutateAsync: messageUpdater,isError } = useUpdateMessage(messageId)
  const {data: bookData} = useMessages();

  useEffect(()=>{
    if(bookData){
      setBookingData([...bookData])
    }
  },[bookData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResponse= async () => {
    const newMessage={
      message:message.message,
      title:message.title,
      user_id:message.user_id,
      user_role:message.user_role,
      response
    }

    try{
      await messageUpdater(newMessage);
      if(!isError){
        setResponse('');
        setOpen(false);
        enqueueSnackbar('Response send successfully', {
          variant: 'success',
          autoHideDuration: 3000,
        })
      }
    }catch(e){
      enqueueSnackbar('Response send failed', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    }
  }

  return (
    <TableContainer component={Paper} width="100%">
    <h1>View Messages</h1>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">user Type</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Message</StyledTableCell>
            <StyledTableCell align="left">Other</StyledTableCell>
            <StyledTableCell align="left">Respond</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingData.map((row) => (
            <StyledTableRow key={row.user_id}>
              <StyledTableCell component="th" scope="row">
                {row.user_id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.first_name+ ' '+row.last_name}</StyledTableCell>
              <StyledTableCell align="left">{row.user_role}</StyledTableCell>
              <StyledTableCell align="left">{row.email_address}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
              <StyledTableCell align="left">{row.message}</StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="primary" onClick={()=>{setMessageId(row.messageId); setMessage(row); handleClickOpen();}}>Respond</Button></div></StyledTableCell>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Respond to the Message</DialogTitle>
              <DialogContent>
                {/* <DialogContentText>
                  <div>{row.title}</div> 
                  <div>{row.message}</div> 
                </DialogContentText> */}
                <TextareaAutosize
                  minRows={6}
                  style={{width:'500px'}}
                  placeholder="Please type your reply..."
                  value={response}
                  onChange={(e)=>{setResponse(e.target.value)}}
                />
                {/* <TextField
                  //autoFocus
                  // margin="dense"
                  // id="message_rly"
                  // label="Reply"
                  // type="text"
                  fullWidth
                /> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleResponse} color="primary">
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
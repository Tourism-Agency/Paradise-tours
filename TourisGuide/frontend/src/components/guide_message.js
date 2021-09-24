import React, { useState,useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './message.css';

import { useSnackbar } from 'notistack';
import useCreateMessage from "../hooks/useCreateMessage";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import useMessages from "../hooks/useMessages";
import AlertDialog from './alertDialog';
import useDeleteMessage from "../hooks/useDeleteMessage";

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

function createData(GuideId,Message, Response ) {
  return {GuideId, Message, Response};
}

const rows = [
  createData('1', 'test', 'repsonse'),
  createData('2', 'message', 'repsonse'),
  createData('3', 'Please', 'repsonse'),
];

const styleTables = makeStyles({
  table: {
    //maxWidth: 520,
  },
});

const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const GuideMessage =()=>{
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [bookingData, setBookingData] = useState([]);

  const [openAlert, setOpenAlert] = useState(false);
  const [id, setId] = useState('');
  const { mutateAsync: userDeleter } = useDeleteMessage(id);

  const { mutateAsync: messageCreater,isError } = useCreateMessage();
  const {data: MessageData} = useMessages({id:2});

  useEffect(()=>{
    if(MessageData){
      setBookingData([...MessageData])
    }
  },[MessageData])

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


  const handleMessages = async ()=>{
    const newMessage={
      title,
      message:details,
      user_id:2,
      user_role:'guide'
    }
    try{
      await messageCreater(newMessage);
      if(!isError){
        setTitle('')
        setDetails('')
        window.location.reload();
        enqueueSnackbar('Message send successfully', {
          variant: 'success',
          autoHideDuration: 3000,
        })
      }
    }catch(e){
      console.log(e);
    }
  }

       return(
         <body>
            <div className="feedback-wrapper">
              <div className="feedback-inner">
                  <h2>Give Your Message</h2> 
                  <div className="form-group">
                          <label>Title</label><br/>
                          <input type="text"  className="form-control" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                      </div>
                      <br/>
                      <div className="form-group">
                          <label>Message Details</label>
                          <textarea className="form-control" placeholder="Please enter your message..." value={details} onChange={(e)=>{setDetails(e.target.value)}}/>
                      </div>
                      <br/>
                  <button className="btn btn-primary btn-block"  onClick={handleMessages} disabled={!title || !details}>Submit</button>
                </div>
                <div style={{padding:"0px 200px"}}>
                <TableContainer component={Paper} style={{width:"",marginTop:"120px"}}>
                  <h1>Messages</h1>
                    <Table className={tableClass.table} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                          <StyledTableCell>Message</StyledTableCell>
                          <StyledTableCell align="left">Response</StyledTableCell>
                          <StyledTableCell align="left">Manage</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bookingData.map((row) => (
                          <StyledTableRow key={row.messageId}>
                            <StyledTableCell component="th" scope="row">
                              {row.title}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {row.message}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.response}</StyledTableCell>
                            <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary" onClick={()=>{setId(row.messageId); setOpenAlert(true);}} >Delete</Button></div></StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <AlertDialog open={openAlert} title="Do you want to delete this message ?" handleClose={handleAlertClose} handleOk={handleOkAccept}/>
                  </div>
              </div>      
          </body>
       );
}

export default GuideMessage;
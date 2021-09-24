import React, { useState,useEffect }from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './updateuserinfo.css';

import useCreateGuideDetails from "../hooks/useCreateGuideDetails"
import { useSnackbar } from 'notistack';
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
import useGuides from "../hooks/useGuides";
import useDeleteAvailability from "../hooks/useDeleteAvailability";
import useGuideDetails from "../hooks/useGuideDetails";
import useDeleteSkill from "../hooks/useDeleteSkill";

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

const UpdateGuideinfo =()=> {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
  const [details,setDetails]=useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [bookingData, setBookingData] = useState([]);

  const { mutateAsync: detailsCreater } = useCreateGuideDetails();
  const [openAlert, setOpenAlert] = useState(false);
  const [id, setId] = useState('');
  const { mutateAsync: userDeleter } = useDeleteSkill(id);

  const {data: MessageData} = useGuideDetails();

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

  const handleAddGuideDetails = async () => {
    const newMessage={
      skills:details
    }
    try{
      await detailsCreater(newMessage);
        setDetails('')
        window.location.reload();
        enqueueSnackbar('Details updated successfully', {
          variant: 'success',
          autoHideDuration: 3000,
        })
      
    }catch(e){
      enqueueSnackbar('Details update failed', {
        variant: 'error',
        autoHideDuration: 3000,
      })
    }
  }

        return(
         <div className="request-wrapper">
          <div className="request-inner"> 
              <h2>Update Guide Details</h2> 
              <div className="form-group">
                      <label>Language Preferences</label>
                      <textarea className="form-control" value={details} placeholder="Add preferred languages here" onChange={(e)=>{setDetails(e.target.value)}}/>
      
              </div>
              <br/>

               <br></br>
              <button className="btn btn-primary btn-block" onClick={handleAddGuideDetails}>Submit</button>
  
          </div>
          <div style={{padding:"0px 200px"}}>
                <TableContainer component={Paper} style={{width:"",marginTop:"120px"}}>
                  <h1>Skills</h1>
                    <Table className={tableClass.table} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                        <StyledTableCell>Title</StyledTableCell>
                          <StyledTableCell>Message</StyledTableCell>
                          <StyledTableCell align="left">Manage</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bookingData.map((row,index) => (
                          <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                              {row.guide_id}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.skills}</StyledTableCell>
                            <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary" onClick={()=>{setId(row.guide_id); setOpenAlert(true);}} >Delete</Button></div></StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <AlertDialog open={openAlert} title="Do you want to delete this ?" handleClose={handleAlertClose} handleOk={handleOkAccept}/>
                  </div>
        </div>
        );
}

export default UpdateGuideinfo;
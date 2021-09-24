import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    margin: '0',
    position: 'absolute',
    padding: '0px',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito !important',
    lineHeight: '20px',
  },
  icon: {
    alignSelf: 'center',
    width: '42px',
    height: '42px',
    position: 'absolute',
    marginTop: '25px',
    color: '#FF7C7C',
  },
  titleBox: {
    padding: '0',
    // width: '185px !important',
    height: '20px !important',
    marginTop: '86px',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#001847',
    fontWeight: '600 !important',
  },
  cancelButton: {
    padding: '0',
    width: '155px',
    height: '40px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #626799',
    borderRadius: '4px',
    color: '#626799',
    margin: '0 25px',
    marginTop: '30px',
    marginBottom: '25px',
    letterSpacing: '0.5px',
    '&:hover': {
      backgroundColor: '#FFFFFF !important',
      border: '2px solid #626799',
    },
  },
  leaveButton: {
    padding: '0',
    width: '155px',
    height: '40px',
    backgroundColor: '#FF7C7C',
    borderRadius: '4px',
    margin: '0 25px',
    marginTop: '30px',
    marginBottom: '25px',
    letterSpacing: '0.5px',
    '&:hover': {
      backgroundColor: '#FF7C7C !important',
      border: '2px solid #626799',
    },
  },
  contentText: {
    padding: '0px 50px',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#001847',
    fontSize: '16px',
    fontWeight: '400 !important',
    fontFamily: 'Nunito',
    lineHeight: '20px',
  },
}));

const AlertDialog = ({
  open,
  handleClose,
  handleOk,
  title,
  children,
  buttonConfirmText,
  buttonCancelText,
  icon,
  width,
}) => {
  const classes = useStyles();

  const handleClick = (e) => {
    e.stopPropagation();
    // doesn't do anything except stop the event
  };

  return (
    <Dialog
      bodyStyle={{ margin: 0, padding: 0 }}
      open={open}
      onClose={handleClose}
      className={classes.dialogBox}
      onClick={handleClick}
      PaperProps={{
        style: {
          borderRadius: '10px',
          padding: '10px',
          width: width ? width : null,
        },
      }}
    >
      {(() => {
        if (icon === 'question') {
          return <HelpOutlineIcon className={classes.icon} />;
        } else if (icon === 'loading') {
          return <AutorenewIcon className={classes.icon} />;
        } else if (icon === 'success') {
          return <CheckCircleOutlineIcon className={classes.icon} />;
        } else {
          return <ErrorOutlineIcon className={classes.icon} />;
        }
      })()}
      <DialogTitle className={classes.titleBox}>{title}</DialogTitle>
      <DialogContentText className={classes.contentText}>
        {children}
      </DialogContentText>
      <DialogActions>
        <Button
          onClick={handleClose}
          className={classes.cancelButton}
          autoFocus
        >
          CANCEL
        </Button>
        <Button onClick={handleOk} className={classes.leaveButton}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;

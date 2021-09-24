import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useDropzone } from 'react-dropzone';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  img: {
    display: 'block',
    width: 'auto',
    height: '100%',
    // If image is needed to be previewed
    // '&:hover': {
    //   position: 'absolute',
    // }
  },
  add: {
    display: 'flex',
    flexDirection: 'inherit',
    alignItems: 'center',
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  },
  thumb: {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: '8vh',
    height: '8vh',
    padding: 4,
    boxSizing: 'border-box',
    '&:hover $deleteButton': {
      position: 'absolute',
      color:"red",
      opacity: 5,
    },
    '&:hover': {
      opacity: '0.5',
    },
  },
  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '9vh',
    overflowY: 'auto',
    borderColor: 'rgba(0, 0, 0, 0.23)',
  },
  deleteButton: {
    display: 'hidden',
    opacity: 0,
    transition: '.5s ease',
    position: 'absolute',
  },
  heading: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  attachTopic: {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
}));

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '50rem', height: '20rem' },
  borderColor: 'text.primary',
};

const Attachment = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(files.concat(acceptedFiles));
    },
    multiple: true,
  });

  const removeImg = (fileName) => {
    const removeFile = files.filter((file) => file.name !== fileName);
    setFiles(removeFile);
  };

  const thumbs = files.map((file) => (
    <>
      <div className={classes.thumb} key={file.name}>
        <div className={classes.thumbInner}>
          <img
            src={URL.createObjectURL(file)}
            className={classes.img}
            alt={file.name}
          />
        </div>
        <div
          className={classes.deleteButton}
          onClick={() => removeImg(file.name)}
        >
          <IconButton style={{padding:"0px"}} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </>
  ));

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <span>
        <Grid container justify="flex-start" alignItems="center">
          <Grid item>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div className={classes.add}>
                <Button className={classes.attachTopic} size="small">
                  Add Images
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </span>
      <Grid item>
        <Box border={1} {...defaultProps} >
          <div className={classes.thumbsContainer}>{thumbs}</div>
        </Box>
      </Grid>
      
    </>
  );
};

export default Attachment;

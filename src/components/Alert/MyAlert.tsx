import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';
import { Container } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
interface AlertProps {
  message: string;
}

const MyAlert: FC<AlertProps> = ({ message }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose:any = (event:any, reason:any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
  <Container>
    <div className={classes.root}>
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert variant="filled"  onClose={handleClose} severity="error">
          {message}
        </Alert>
      </Snackbar>
    </div>
    </Container>
  );
}

export default MyAlert;
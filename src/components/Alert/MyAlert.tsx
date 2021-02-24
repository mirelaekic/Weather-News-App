import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';
import { Container } from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

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
  return (
  <Container>
    <div className={classes.root}>
    <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </div>
    </Container>
  );
}

export default MyAlert;
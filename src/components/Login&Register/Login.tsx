import React, { FormEvent,FC , useState} from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login, setLoading } from "../../store/actions/login";
import {withRouter,Redirect, Link} from "react-router-dom";
import "./style.css"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getNews } from "../../store/actions/news";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root1: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email,password)
    setEmail("")
    setPassword("")
    localStorage.setItem("user",email)
    window.onload = () => dispatch(getNews());
  }

  const classes = useStyles();

  return (
    <div>
     
  <Container>
    <div className="login-wrapper mt-5">
    {localStorage.getItem("user") ? <Redirect to="/" />  : <Redirect to="/login" /> || <Redirect to="/register" />}
    <h4 style={{color:"#C51162"}} className="mb-5">LOGIN OR REGISTER</h4>
      <form className={classes.root} onSubmit={handleSubmit}>
        <label>
          <TextField id="email" label="Email" color="secondary" type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
        <TextField id="password" label="Password" color="secondary"  type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="mt-4">
          <Button type="submit" variant="contained" color="secondary">Login</Button>
        </div>
      </form>
      <a className="mt-5" href={"http://localhost:3012/users/googleLogin"}>Log in with google</a>
      <div className="mt-3">
      <Link to="/register">Register here</Link>
      </div>
    </div>
    </Container>
    </div>
  );
}

export default withRouter(Login);
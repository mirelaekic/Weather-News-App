import React, { FormEvent, FC, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core/";
import { register, setLoading } from "../../store/actions/register";
import { withRouter, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  root1: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Register: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(email, password, name, surname));
    setEmail("");
    setPassword("");
    localStorage.setItem("user", email);
  };

  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Container>
        <h1 style={{ color: "#C51162" }}>Register</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            color="secondary"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="surname"
            label="Surname"
            color="secondary"
            type="text"
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            color="secondary"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            color="secondary"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-4">
            <Button type="submit" variant="contained" color="secondary">
              Register
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default withRouter(Register);

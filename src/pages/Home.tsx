import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Search from "../components/Search/Search";
import MyAlert from "../components/Alert/MyAlert";
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "react-bootstrap";
import {withRouter,Redirect} from "react-router-dom";
import {Button} from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    placeContent: "center !important",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Home: FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const classes = useStyles();
  
  const logout = () => {
    const loggedOut:any = localStorage.removeItem("user")
    if(loggedOut === true){
      return (<Redirect to="/login" />)
    } 
  }
  return (
    <div className="has-text-centered">
      {localStorage.getItem("user") ? <Redirect to="/" /> : <Redirect to="/login" /> || <Redirect to="/register" />}
      <Search title="Weather" />
      <Button onClick={logout} variant="contained" color="secondary" className="ml-5 mb-5">Logout {localStorage.getItem("user")}</Button>
      {alertMsg && <MyAlert message={alertMsg} />}
      {error && <MyAlert message={error} />}
      {loading ? (
        <Container className="loader">
          <div className={classes.root}>
            <CircularProgress />
          </div>
        </Container>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {loading ? (
        <Container className="loader">
          <div className={classes.root}>
            <CircularProgress />
          </div>
        </Container>
      ) : (
        <News />
      )}
    </div>
  );
};

export default withRouter(Home);

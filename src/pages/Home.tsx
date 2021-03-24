import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Search from "../components/Search/Search";
import MyAlert from "../components/Alert/MyAlert";
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "react-bootstrap";
import {withRouter} from "react-router-dom";

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
 
  return (
    <div className="has-text-centered">
      <Search title="Weather" />
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

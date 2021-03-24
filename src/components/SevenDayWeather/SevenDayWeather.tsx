import React, { FC } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Container, Row,Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#4179add0 !important",
  }
}));

const SevenDayWeather: FC = () => {
  const sevenDayData = useSelector(
    (state: RootState) => state.sevenDayWeather.data
  );
 function getDay(day:any){
   if (day == undefined) {
     console.log("error");
   } else {
     const date = new Date(day * 1000);
     const time = moment(date).format("dddd Do")
     return time
   }
 }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Row>
        {sevenDayData?.daily.slice(1,7).map((d, i) => (
          <Col key={i} lg={12}>
              <h5 style={{color:"white"}}>{getDay(d.dt)}</h5>
              <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`} />
              <p style={{color:"white"}}>{(d.temp.max - 273.15).toFixed(0)} / {(d.temp.min - 273.15).toFixed(0)}°</p>
              <hr />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SevenDayWeather;

import React, { FC } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { Container, Row,Col } from "react-bootstrap";
import "../Weather/Weather.css"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white !important",
    display:"flex",
    placeContent:"space-between",
    padding:"3rem",
    borderRadius:"10px",
    boxShadow:" 0px 0px 6px 3px rgba(182, 182, 182, 0.75)",
    marginBottom:"3rem"
  },
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
     const time = moment(date).format("ddd. Do")
     return time
   }
 }
  const classes = useStyles();
  return (
    <div className={classes.root}>
        {sevenDayData?.daily.slice(1,7).map((d, i) => (
          <div className="day-info">
              <h5>{getDay(d.dt)}</h5>
              <p className="max-temp">{(d.temp.max - 273.15).toFixed(0)}°</p>
              <p className="min-temp">{(d.temp.min - 273.15).toFixed(0)}°</p>
              <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}.png`} />
              </div>
        ))}

    </div>
  );
};

export default SevenDayWeather;

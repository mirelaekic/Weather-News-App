import React, { FC, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { WeatherData } from "../../store/types";
import { getSevenDayWeather } from "../../store/actions/sevenDayWeather";
import SevenDayWeather from "../SevenDayWeather/SevenDayWeather";
import "./Weather.css";
import Moment from "react-moment"

interface Props {
  data: WeatherData;
}

const Weather: FC<Props> = ({ data }) => {
  const imageData = useSelector((state: RootState) => state.image.images);
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(0);
  const celsius = (data.main.temp - 273.15).toFixed(0);
  const feelsLike = (data.main.feels_like - 273.15).toFixed(0);
  const kmh = (data.wind.speed * 3.6).toFixed(0)
  const [lat, setLat] = useState(data.coord.lat);
  const [lon, setLon] = useState(data.coord.lon);

  const dispatch = useDispatch();
  dispatch(getSevenDayWeather(lat, lon));
console.log(data,"weather data")
  return (
    <div>
      <Container className="weather-card">
      <Row>
        <Col>
        <div className="bp3-card .bp3-elevation-4">
          {/* <img src={imageData?.photos[0].src?.landscape} />*/}
          <Image src={imageData?.photos[3].src?.medium} fluid />
          <Row>
            <Col>
              <h3 className="title has-text-centered" style={{ marginTop: 30 }}>
                {data.name}
              </h3>
                  <h1 className="mb-2">
                    {celsius}
                    <sup>&#8451;</sup>
                  </h1>
              <p className="heading">{data.weather[0].description}</p>
            </Col>
            <Col>
            <div className="mt-4 weatherInfo" style={{listStyleType:"none",textAlign:"start"}}>
              <li>Feels like {feelsLike}<sup>&#8451;</sup></li>
              <hr/>
              <li>Wind {kmh}km/h</li>
              <hr/>
              <li>Humidity {data.main.humidity}%</li>
              <hr/>
              <li>Sunset <Moment format="LT">{data.sys.sunset}</Moment></li>
            </div>
            </Col>
          </Row>
        </div>
        </Col>
        <Col>
        <SevenDayWeather />
        </Col>
        </Row>
      </Container> 
    </div>
  );
};
export default Weather;

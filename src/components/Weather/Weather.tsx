import React, { FC, useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { WeatherData } from "../../store/types";
import { getSevenDayWeather } from "../../store/actions/sevenDayWeather";
import SevenDayWeather from "../SevenDayWeather/SevenDayWeather";
import "./Weather.css";
import Moment from "react-moment";

interface Props {
  data: WeatherData;
}

const Weather: FC<Props> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(0);
  const celsius = (data.main.temp - 273.15).toFixed(0);
  const feelsLike = (data.main.feels_like - 273.15).toFixed(0);
  const kmh = (data.wind.speed * 3.6).toFixed(0);

  const [lat, setLat] = useState(data.coord.lat);
  const [lon, setLon] = useState(data.coord.lon);
  const [img, setImg] = useState();

  const dispatch = useDispatch();
  dispatch(getSevenDayWeather(lat, lon));
  const rawDate = new Date(data.dt);
  const date =
    rawDate.toLocaleDateString() + " " + rawDate.toLocaleTimeString();
  console.log(date, "the date");
  return (
    <div id="background">
      <Container className="weather-card">
        <Row>
          <Col>
            <div className="bp3-card .bp3-elevation-4">
              <Row>
                <Col lg={6} className="ml-5">
                  <h3
                    className="title has-text-centered"
                    style={{ marginTop: 30 }}
                  >
                    {data.name}
                  </h3>
                  <h1 className="mb-2 celsius">
                    {celsius}
                    <sup>&#8451;</sup>
                  </h1>
                  <p className="heading">{data.weather[0].main}</p>
                  <p className="subhead">
                    Feels like {feelsLike}
                    <sup>&#8451;</sup>
                  </p>
                </Col>
                <Col lg={5}>
                  <div
                    className="weatherInfo"
                    style={{ listStyleType: "none", textAlign: "start" }}
                  >
                    <div className="iconDiv">
                      <img
                        className="weather-icon"
                        alt={data.weather[0].main}
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                      />
                    </div>
                    <li>Wind {kmh}km/h</li>
                    <hr />
                    <li>Humidity {data.main.humidity}%</li>
                    <hr />
                    <li>
                      Sunset <Moment format="LT">{data.sys.sunset}</Moment>
                    </li>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="seven-day-row mt-5 mb-2">
          <SevenDayWeather />
        </Row>
      </Container>
    </div>
  );
};
export default Weather;

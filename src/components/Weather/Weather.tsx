import React, { FC, useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux"
import { RootState } from '../../store';
import { WeatherData } from '../../store/types';
import { getSevenDayWeather, setLoading } from "../../store/actions/sevenDayWeather";
import SevenDayWeather from '../SevenDayWeather/SevenDayWeather'
import "./Weather.css"

interface Props {
  data: WeatherData;
}

const Weather: FC<Props> = ({data}) => {
  const imageData = useSelector((state: RootState) => state.image.images);
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(0);
  const celsius = (data.main.temp - 273.15).toFixed(0);
  const [lat, setLat] = useState(data.coord.lat)
  const [lon, setLon] = useState(data.coord.lon)

  const dispatch = useDispatch();
  dispatch(getSevenDayWeather(lat,lon));

return(
  <div>
      <Container className="weather-card">
      <div className="bp3-card .bp3-elevation-4">
       {/* <img src={imageData?.photos[0].src?.landscape} />*/}
       <Image src={imageData?.photos[3].src?.medium} fluid />
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>{data.name} - {data.sys.country}</h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.weather[0].description}</p>
              <p className="title"><img className="weather-icon"src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
            </div>
          </div>
            <div>
              <div className="title">
                <h3 className="mb-2">{celsius}<sup>&#8451;</sup></h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SevenDayWeather />
      </div>
)
  
}
export default Weather;
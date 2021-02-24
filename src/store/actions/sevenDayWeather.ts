import { ThunkAction } from 'redux-thunk';
import { RootState } from "../index"

import { SevenDayWeatherAction, SevenDayWeatherData, WeatherError, GET_7DAYWEATHER, SET_LOADING, SET_ERROR } from '../types';

export const getSevenDayWeather = (lat:number,lon:number): ThunkAction<void, RootState, null, SevenDayWeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`);
      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }
      
      const resData: SevenDayWeatherData = await res.json();

      dispatch({
        type: GET_7DAYWEATHER,
        payload: resData
      });
    }catch(err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      });
    }
  }
}


export const setLoading = (): SevenDayWeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): SevenDayWeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
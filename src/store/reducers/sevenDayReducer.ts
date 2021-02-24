import { SevenDayWeatherState, SevenDayWeatherAction, GET_7DAYWEATHER, SET_LOADING, SET_ERROR } from "../types";

const initialState: SevenDayWeatherState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: SevenDayWeatherAction): SevenDayWeatherState => {
  switch(action.type) {
    case GET_7DAYWEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}
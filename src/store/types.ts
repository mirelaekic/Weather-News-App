export const GET_WEATHER = 'GET_WEATHER';
export const GET_7DAYWEATHER = 'GET_7DAYWEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const GET_IMAGE = 'GET_IMAGE';
export const GET_NEWS = 'GET_NEWS';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
export interface photos {
  id:number;
  width:number;
  height:number;
  url:string;
  photographer:string;
  photographer_url:string;
  avg_color:string;
  src:{
    original:string;
    large2x:string;
    large:string;
    medium:string,
    small:string;
    portrait:string;
    landscape:string;
    tiny:string;
  },
  liked:boolean
}
export interface ImageData {
  total_results:number;
  page:number;
  per_page:number;
  photos: photos[];
}
export interface ImageState {
  images: ImageData | null;
  loading: boolean;
  error: string;
}

interface GetImageAction {
  type: typeof GET_IMAGE;
  payload: ImageData;
}
export interface ImageError {
  cod: string;
  message: string;
}
export type ImageAction = GetImageAction | SetLoadingAction | SetErrorAction;

export interface SevenDayWeatherData {
  lat:number;
  lon:number;
  timezone:string,
  timezone_offset:string,
  current:{
    dt:number;
    sunrise:number;
    sunset:number;
    temp:number;
    feels_like:number;
    pressure:number;
    humidity:number;
    dew_point:number;
    uvi:number;
    clouds:number;
    visibility:number;
    wind_speed:number;
    wind_deg:number;
    weather: SevenDayWeather[];
  }
  daily:dailyWeather[];
  alerts:dailyAlert[];
}
export interface SevenDayWeather{
  id:number;
  main:string;
  description:string;
  icon:string;

}
export interface dailyAlert{
  sender_name:string;
  event:string;
  start:number;
  end:number;
  description:string;
}
export interface dailyWeather{
  day: string[],
  dt:number;
  sunrise:number;
  sunset:number;
  temp:{
    day:number;
    min:number;
    max:number;
    night:number;
    eve:number;
    morn:number;
  },
  feels_like:{
    day:number;
    night:number;
    eve:number;
    morn:number;
  },
  pressure:number;
  humidity:number;
  dew_point:number;
  wind_speed:number;
  wind_deg:number;
  weather:dayWeather[];
  clouds:number;
  pop:number;
  uvi:number
}
export interface dayWeather{
  id:number;
  main:string;
  description:string;
  icon:string
}
export interface SevenDayWeatherState {
  data: SevenDayWeatherData | null;
  loading: boolean;
  error: string;
}
interface GetSevenDayWeatherAction {
  type: typeof GET_7DAYWEATHER;
  payload: SevenDayWeatherData;
}

export type SevenDayWeatherAction = GetSevenDayWeatherAction | SetLoadingAction | SetErrorAction;

export interface NewsData {
  status:string;
  totalResults:number;
  articles:articles[];
}
export interface articles {
  source:{
    id:string;
    name:string;
  },
  author:string;
  title:string;
  description:string;
  url:string;
  urlToImage:string;
  publishedAt:string;
  contnet:string;
}
export interface NewsState {
  data: NewsData | null;
  loading:boolean;
  error:string
}

interface GetNews {
  type:typeof GET_NEWS;
  payload:NewsData;
}
export interface NewsError {
  cod: string;
  message: string;
}
export type NewsAction = GetNews | SetLoadingAction | SetErrorAction;

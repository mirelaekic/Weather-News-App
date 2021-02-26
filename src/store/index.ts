import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from './reducers/weatherReducer';
import alertReducer from './reducers/alertReducer';
import imageReducer from './reducers/imageReducer';
import sevenDayReducer from './reducers/sevenDayReducer';
import newsReducer from './reducers/newsReducer';
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer'
const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
  image:imageReducer,
  sevenDayWeather:sevenDayReducer,
  news:newsReducer,
  login:loginReducer,
  register:registerReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
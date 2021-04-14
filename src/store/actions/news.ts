import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../index"

import { NewsAction, NewsData, NewsError, GET_NEWS, SET_LOADING, SET_ERROR } from '../types';

export const getNews = (): ThunkAction<void, RootState, null, NewsAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch
        (`https://newsapi.org/v2/everything?q=weather&apiKey=${process.env.REACT_APP_NEWS_KEY}`,{mode:"cors"});
      if (!res.ok) {
        const data: NewsError = await res.json();
        throw new Error(data.message);
      } else {
        const data: NewsData = await res.json();
        dispatch({
          type: GET_NEWS,
          payload: data,
        });
      }
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): NewsAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): NewsAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../index"

import { LoginAction, UserData, LoginError, LOGIN, SET_LOADING, SET_ERROR } from '../types';

export const login = (email:string,password:string): ThunkAction<void, RootState, null, LoginAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3012/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password})
      })
      if (!res.ok) {
        const data: LoginError = await res.json();
        throw new Error(data.message);
      } else {
        const data: UserData = await res.json();
        dispatch({
          type: LOGIN,
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

export const setLoading = (): LoginAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): LoginAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../index"

import { RegisterAction, RegisterData, RegisterError, REGISTER, SET_LOADING, SET_ERROR } from '../types';

export const register = (email:string,password:string,name:string,surname:string): ThunkAction<void, RootState, null, RegisterAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3012/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password,name,surname})
      })
      if (!res.ok) {
        const data: RegisterError = await res.json();
        throw new Error(data.message);
      } else {
        const data: RegisterData = await res.json();
        dispatch({
          type: REGISTER,
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

export const setLoading = (): RegisterAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): RegisterAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
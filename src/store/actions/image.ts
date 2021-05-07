import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";

import {
  ImageAction,
  ImageData,
  ImageError,
  GET_IMAGE,
  SET_LOADING,
  SET_ERROR,
  cities,
} from "../types";

export const getImage = (
  city: string
): ThunkAction<void, RootState, null, ImageAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://sandbox.musement.com/api/v3/cities?offset=0&sort_by=weight&without_events=no");
      if (!res.ok) {
        const resData: ImageError = await res.json();
        throw new Error(resData.message);
      }
      const resData: any = await res.json();
      dispatch({
        type: GET_IMAGE,
        payload: resData,
      });
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const setLoading = (): ImageAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): ImageAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};

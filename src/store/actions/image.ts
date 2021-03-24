import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";

import {
  ImageAction,
  ImageData,
  ImageError,
  GET_IMAGE,
  SET_LOADING,
  SET_ERROR,
} from "../types";

export const getImage = (
  city: string
): ThunkAction<void, RootState, null, ImageAction> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${city}+query&per_page=15&page=1`,
        {
          headers: {
            "Authorization": `${process.env.REACT_APP_IMAGE_API_KEY}`,
          },
        }
      );

      if (!res.ok) {
        const resData: ImageError = await res.json();
        throw new Error(resData.message);
      }

      const resData: ImageData = await res.json();
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

import { ImageState, ImageAction, GET_IMAGE, SET_LOADING, SET_ERROR } from "../types";

const initialState: ImageState = {
  images: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: ImageAction): ImageState => {
  switch(action.type) {
    case GET_IMAGE:
      return {
        images: action.payload,
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
import { NewsState, NewsAction, GET_NEWS, SET_LOADING, SET_ERROR } from "../types";

const initialState: NewsState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: NewsAction): NewsState => {
  switch(action.type) {
    case GET_NEWS:
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
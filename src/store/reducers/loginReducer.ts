import { LoginState, LoginAction, LOGIN, SET_LOADING, SET_ERROR } from "../types";

const initialState: LoginState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: LoginAction): LoginState => {
  switch(action.type) {
    case LOGIN:
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
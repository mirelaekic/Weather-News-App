import { RegisterState, RegisterAction, REGISTER, SET_LOADING, SET_ERROR } from "../types";

const initialState: RegisterState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: RegisterAction): RegisterState => {
  switch(action.type) {
    case REGISTER:
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
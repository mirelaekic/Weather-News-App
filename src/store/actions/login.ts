// import { ThunkAction } from "redux-thunk";
// import { RootState } from "../index";
// import axios from "axios";

// import {
//   LoginAction,
//   UserData,
//   LoginError,
//   LOGIN,
//   SET_LOADING,
//   SET_ERROR,
// } from "../types";

// export const login = (
//   email: string,
//   password: string
// ): ThunkAction<void, RootState, null, LoginAction> => {
//   return() => {
//     axios
//       .post("http://localhost:3012/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: {
//           email,
//           password,
//         },
//         withCredentials: true, // use cookies
//       })
//       localStorage.setItem("user",email)
//   };
// };
// export const setLoading = (): LoginAction => {
//   return {
//     type: SET_LOADING,
//   };
// };

// export const setError = (): LoginAction => {
//   return {
//     type: SET_ERROR,
//     payload: "",
//   };
// };

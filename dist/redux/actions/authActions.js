import axios from "../../../_snowpack/pkg/axios.js";
import {setAuthToken} from "../../utils/setAuthToken.js";
import jwt_decode from "../../../_snowpack/pkg/jwt-decode.js";
import {SET_CURRENT_USER, USER_LOADING} from "../types/authTypes.js";
import {GET_ERRORS} from "../types/errorTypes.js";
export const userRegister = ({payload, navigate}) => (dispatch) => {
  axios.post("/api/auth/register", payload).then(() => navigate("/login")).catch((err) => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }));
};
export const userLogin = ({payload, navigate}) => (dispatch) => {
  axios.post("/api/auth/login", payload).then(({data}) => {
    const {token} = data;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    navigate("/");
  }).catch((err) => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  }));
};
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

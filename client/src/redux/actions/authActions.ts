import { RegisterUserAction } from './../types/authTypes';
import axios from 'axios';
import { setAuthToken } from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, USER_LOADING } from '../types/authTypes';
import { GET_ERRORS } from '../types/errorTypes';

// Register User
export const userRegister = ({ payload, navigate }: RegisterUserAction) => (dispatch) => {
    axios
        .post('/api/auth/register', payload)
        .then(() => navigate('/login'))
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            }),
        );
};

// Login - get user token
export const userLogin = ({ payload, navigate }: RegisterUserAction) => (dispatch) => {
    axios
        .post('/api/auth/login', payload)
        .then(({ data }) => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = data;
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
            navigate('/');
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            }),
        );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};
// Log user out
export const logoutUser = () => (dispatch) => {
    // Remove token from local storage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

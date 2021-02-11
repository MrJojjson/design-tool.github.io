/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { isEmpty } from 'ramda';
import { AuthState, AuthActions, USER_LOADING, SET_CURRENT_USER, REGISTER_USER, LOGIN_USER } from '../types/authTypes';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    messages: {},
    errors: {},
};

export const AuthReducer = (state: AuthState = initialState, action: AuthActions) => {
    const { payload } = action;
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                messages: {
                    registration: payload,
                },
            };
        case LOGIN_USER:
            return {
                ...state,
                messages: {
                    login: payload,
                },
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(payload),
                user: payload,
                loading: false,
            };
        case USER_LOADING:
            return {
                ...state,
                loading: payload,
            };
        default:
            return state;
    }
};

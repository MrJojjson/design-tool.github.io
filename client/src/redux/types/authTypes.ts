export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const USER_LOADING = 'USER_LOADING';
import { NavigateFn } from '@reach/router';

export type LoginUserType = {
    email: string;
    password: string;
};

export type RegisterUserType = LoginUserType & {
    name: string;
    confirmPassword: string;
};

export type UserType = (LoginUserType & RegisterUserType) | null;

export type AuthMessages =
    | {
          registration: string;
          login: string;
      }
    | unknown;

export type AuthErrors = RegisterUserType | unknown;

export type AuthState = {
    isAuthenticated: boolean;
    user: UserType;
    loading: boolean;
    messages: AuthMessages;
    errors: AuthErrors;
};

export type RegisterUserAction = {
    type: 'REGISTER_USER';
    payload: RegisterUserType;
    navigate: NavigateFn;
};

export type LoginUserAction = {
    type: 'LOGIN_USER';
    payload: LoginUserType;
    navigate: NavigateFn;
};

export type SetCurrentUserAction = {
    type: 'SET_CURRENT_USER';
    payload: UserType;
};

export type UserLoadingAction = {
    type: 'USER_LOADING';
    payload: AuthState['loading'];
};

export type AuthActions = RegisterUserAction | LoginUserAction | SetCurrentUserAction | UserLoadingAction;

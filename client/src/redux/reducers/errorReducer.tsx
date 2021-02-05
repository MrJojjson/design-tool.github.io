import { ErrorActions, ErrorState, GET_ERRORS } from '../types/errorTypes';
const initialState: ErrorState = {};
export const ErrorReducer = (state: ErrorState = initialState, action: ErrorActions) => {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
};

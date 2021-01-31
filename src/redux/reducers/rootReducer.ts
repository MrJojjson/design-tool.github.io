import { PageActions } from './../types/pageTypes';
import { PageReducer } from './pageReducer';
import { combineReducers, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IStoreState } from '../storeState';

export type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, any>;

export type StoreAction = PageActions;

export const rootReducer: Reducer<IStoreState, StoreAction> = combineReducers({
    pages: PageReducer,
});

import { AuthActions } from './../types/authTypes';
import { combineReducers, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IStoreState } from '../storeState';
import { ArtboardActions } from '../types/artboardTypes';
import { PageActions } from './../types/pageTypes';
import { ArtboardReducer } from './artboardReducer';
import { PageReducer } from './pageReducer';

export type ThunkResult<R> = ThunkAction<R, IStoreState, undefined, any>;

export type StoreAction = PageActions | ArtboardActions;

export const rootReducer: Reducer<IStoreState, StoreAction> = combineReducers({
    pages: PageReducer,
    artboards: ArtboardReducer,
});

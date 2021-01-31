import { PagesState } from './types/pageTypes';

export interface IStoreState {
    pages: PagesState;
}

export type IStoreStateField = keyof IStoreState;

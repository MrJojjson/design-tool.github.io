import { ArtboardState } from './types/artboardTypes';
import { PagesState } from './types/pageTypes';

export interface IStoreState {
    pages: PagesState;
    artboards: ArtboardState;
}

export type IStoreStateField = keyof IStoreState;

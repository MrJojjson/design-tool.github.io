import { AuthState } from './types/authTypes';
import { ErrorState } from './types/errorTypes';
import { ArtboardState } from './types/artboardTypes';
import { PagesState } from './types/pageTypes';

export interface IStoreState {
    pages: PagesState;
    artboards: ArtboardState;
    auth: AuthState;
    errors: ErrorState;
}

export type IStoreStateField = keyof IStoreState;

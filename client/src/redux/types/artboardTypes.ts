import { IPage } from './pageTypes';

export const ACTIVE_ARTBOARD = 'ACTIVE_ARTBOARD';
export const ADD_ARTBOARD = 'ADD_ARTBOARD';
export const REMOVE_ARTBOARD = 'REMOVE_ARTBOARD';

export interface IArtboard {
    title: string;
    id: string;
    pageId: IPage['id'];
}

export type ArtboardState = {
    defined: IArtboard[];
    active: IArtboard['id'];
    id: string;
};

export type AddArtboardAction = {
    type: 'ADD_ARTBOARD';
    pageId: IPage['id'];
};

export type RemoveArtboardAction = {
    type: 'REMOVE_ARTBOARD';
    id: IArtboard['id'];
};

export type ActiveArtboardAction = {
    type: 'ACTIVE_ARTBOARD';
    id: ArtboardState['id'];
};

export type ArtboardActions = ActiveArtboardAction | AddArtboardAction | RemoveArtboardAction;

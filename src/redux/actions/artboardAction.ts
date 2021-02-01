import { ActiveArtboardAction, ACTIVE_ARTBOARD, AddArtboardAction, RemoveArtboardAction } from '../types/artboardTypes';
import { ADD_ARTBOARD, REMOVE_ARTBOARD } from './../types/artboardTypes';

export const addArtboard = ({ pageId }: Pick<AddArtboardAction, 'pageId'>): AddArtboardAction => ({
    type: ADD_ARTBOARD,
    pageId,
});

export const removeArtboard = ({ id }: Pick<RemoveArtboardAction, 'id'>): RemoveArtboardAction => ({
    type: REMOVE_ARTBOARD,
    id,
});

export const setActiveArtboard = ({ id }: Pick<ActiveArtboardAction, 'id'>): ActiveArtboardAction => ({
    type: ACTIVE_ARTBOARD,
    id,
});

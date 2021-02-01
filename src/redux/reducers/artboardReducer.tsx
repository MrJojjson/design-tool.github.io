import { filter } from 'ramda';
import { uniqueArtboardId } from '../../utils/uniqueId';
import { ACTIVE_ARTBOARD, ADD_ARTBOARD, ArtboardActions, ArtboardState, REMOVE_ARTBOARD } from '../types/artboardTypes';

const initialState: ArtboardState = {
    defined: [],
    active: '',
    id: '',
};

export const ArtboardReducer = (state: ArtboardState = initialState, action: ArtboardActions): ArtboardState => {
    switch (action.type) {
        case ADD_ARTBOARD:
            const uid = uniqueArtboardId();
            return {
                ...state,
                defined: [...state.defined, { title: `New Artboard #${uid}`, id: uid, pageId: action.pageId }],
            };
        case REMOVE_ARTBOARD:
            const removedDefined = filter(({ id }) => id !== action.id, state.defined);
            return {
                ...state,
                defined: removedDefined,
                active: '',
            };
        case ACTIVE_ARTBOARD:
            return {
                ...state,
                active: action.id,
            };
    }
    return state;
};

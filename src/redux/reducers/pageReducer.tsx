import { filter } from 'ramda';
import { uniqueId } from '../../utils/uniqueId';
import { PagesState, PageActions, ACTIVE_PAGE, NEW_PAGE, REMOVE_PAGE } from '../types/pageTypes';

const initialState: PagesState = {
    active: null,
    defined: [],
};

export const PageReducer = (state: PagesState = initialState, action: PageActions): PagesState => {
    switch (action.type) {
        case ACTIVE_PAGE:
            return {
                ...state,
                active: action.id,
            };
        case NEW_PAGE:
            const uid = uniqueId({ prefix: '' });
            return {
                ...state,
                defined: [...state.defined, { name: `New Page #${uid}`, id: uid }],
            };
        case REMOVE_PAGE:
            const newDefined = filter(({ id }) => id !== action.id, state.defined);
            return {
                ...state,
                defined: newDefined,
            };
    }
    return state;
};

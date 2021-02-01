import { filter } from 'ramda';
import { alterReduxArray } from '../../utils/alterRedux';
import {
    PagesState,
    PageActions,
    ACTIVE_PAGE,
    ADD_PAGE,
    REMOVE_PAGE,
    EDIT_PAGE,
    RENAME_PAGE,
    MENU_PAGE,
} from '../types/pageTypes';

const initialState: PagesState = {
    active: '',
    edit: '',
    menu: '',
    defined: [],
};

export const PageReducer = (state: PagesState = initialState, action: PageActions): PagesState => {
    const { id } = action;
    switch (action.type) {
        case ACTIVE_PAGE:
            return {
                ...state,
                active: id,
                menu: '',
            };
        case ADD_PAGE:
            return {
                ...state,
                defined: [...state.defined, { name: `New Page #${id}`, id: id }],
                active: id,
            };
        case REMOVE_PAGE:
            const removedDefined = filter(({ id }) => id !== id, state.defined);
            return {
                ...state,
                defined: removedDefined,
                edit: '',
                menu: '',
                active: '',
            };
        case EDIT_PAGE:
            return {
                ...state,
                edit: id,
            };
        case RENAME_PAGE:
            return {
                ...state,
                defined: alterReduxArray({ array: state.defined, id: id, valueKey: 'name', value: action.name }),
                menu: '',
                edit: '',
            };
        case MENU_PAGE:
            return {
                ...state,
                menu: state.menu === id ? '' : id,
                active: '',
            };
    }
    return state;
};

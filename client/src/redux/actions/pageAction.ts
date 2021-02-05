import {
    EditPageAction,
    EDIT_PAGE,
    RENAME_PAGE,
    MenuPageAction,
    RenamePageAction,
    MENU_PAGE,
} from './../types/pageTypes';
import {
    ACTIVE_PAGE,
    ADD_PAGE,
    REMOVE_PAGE,
    IPage,
    ActivePageAction,
    AddPageAction,
    RemovePageAction,
} from '../types/pageTypes';

export const setActivePage = ({ id }: Pick<IPage, 'id'>): ActivePageAction => ({
    type: ACTIVE_PAGE,
    id,
});

export const addPage = ({ id }: Pick<IPage, 'id'>): AddPageAction => ({
    type: ADD_PAGE,
    id,
});

export const removePage = ({ id }: Pick<IPage, 'id'>): RemovePageAction => ({
    type: REMOVE_PAGE,
    id,
});

export const editPage = ({ id }: Pick<IPage, 'id'>): EditPageAction => ({
    type: EDIT_PAGE,
    id,
});

export const renamePage = ({ id, title }: Pick<IPage, 'id' | 'title'>): RenamePageAction => ({
    type: RENAME_PAGE,
    id,
    title,
});

export const menuPage = ({ id }: Pick<IPage, 'id'>): MenuPageAction => ({
    type: MENU_PAGE,
    id,
});

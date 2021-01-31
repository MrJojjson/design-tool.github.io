import {
    ACTIVE_PAGE,
    NEW_PAGE,
    REMOVE_PAGE,
    IPage,
    ActivePageAction,
    NewPageAction,
    RemovePageAction,
} from '../types/pageTypes';

export const setActivePage = ({ id }: Pick<IPage, 'id'>): ActivePageAction => ({
    type: ACTIVE_PAGE,
    id,
});

export const addPage = (): NewPageAction => ({
    type: NEW_PAGE,
});

export const removePage = ({ id }: Pick<IPage, 'id'>): RemovePageAction => ({
    type: REMOVE_PAGE,
    id,
});

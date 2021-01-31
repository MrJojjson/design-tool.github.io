export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const NEW_PAGE = 'NEW_PAGE';
export const REMOVE_PAGE = 'REMOVE_PAGE';

export interface IPage {
    id: string | null;
    name: string;
}

export type PagesState = {
    active: IPage['id'];
    defined: IPage[];
};

export type ActivePageAction = {
    type: 'ACTIVE_PAGE';
    id: IPage['id'];
};

export type NewPageAction = {
    type: 'NEW_PAGE';
};

export type RemovePageAction = {
    type: 'REMOVE_PAGE';
    id: IPage['id'];
};

export type PageActions = ActivePageAction | NewPageAction | RemovePageAction;

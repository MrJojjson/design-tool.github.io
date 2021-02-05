import { Page } from './../../types.d';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const ADD_PAGE = 'ADD_PAGE';
export const REMOVE_PAGE = 'REMOVE_PAGE';
export const EDIT_PAGE = 'EDIT_PAGE';
export const RENAME_PAGE = 'RENAME_PAGE';
export const MENU_PAGE = 'MENU_PAGE';

export type IPage = Page;

export type PagesState = {
    active: IPage['id'];
    edit: IPage['id'];
    menu: IPage['id'];
    defined: IPage[];
};

export type ActivePageAction = {
    type: 'ACTIVE_PAGE';
    id: IPage['id'];
};

export type AddPageAction = {
    type: 'ADD_PAGE';
    id: IPage['id'];
};

export type RemovePageAction = {
    type: 'REMOVE_PAGE';
    id: IPage['id'];
};

export type EditPageAction = {
    type: 'EDIT_PAGE';
    id: IPage['id'];
};

export type RenamePageAction = {
    type: 'RENAME_PAGE';
    id: IPage['id'];
    title: IPage['title'];
};

export type MenuPageAction = {
    type: 'MENU_PAGE';
    id: IPage['id'];
};

export type PageActions =
    | ActivePageAction
    | AddPageAction
    | RemovePageAction
    | EditPageAction
    | RenamePageAction
    | MenuPageAction;

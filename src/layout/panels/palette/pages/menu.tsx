import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPage, menuPage, removePage, renamePage, setActivePage } from '../../../../redux/actions/pageAction';
import { IStoreState } from '../../../../redux/storeState';
import { IPage, PageActions, PagesState } from '../../../../redux/types/pageTypes';

export const PageMenu = ({ name, id }: IPage) => {
    const dispatch: Dispatch<PageActions> = useDispatch();
    const { active, edit, menu, defined = [] } = useSelector<IStoreState, PagesState>(({ pages }) => pages);

    return (
        <div>
            <button onClick={() => dispatch(removePage({ id }))}>Remove</button>
            <button onClick={() => dispatch(editPage({ id }))}>Rename</button>
        </div>
    );
};

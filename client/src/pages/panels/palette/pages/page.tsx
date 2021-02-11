import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPage, menuPage, renamePage, setActivePage } from '../../../../redux/actions/pageAction';
import { IStoreState } from '../../../../redux/storeState';
import { PageActions, PagesState } from '../../../../redux/types/pageTypes';
import { Page as PageType } from '../../../../types';
import { PageMenu } from './menu';

export const Page = ({ title, id }: PageType) => {
    const dispatch: Dispatch<PageActions> = useDispatch();
    const { active, edit, menu, defined = [] } = useSelector<IStoreState, PagesState>(({ pages }) => pages);

    return (
        <span>
            {/* <input
                disabled={active === id || (menu !== '' && menu !== id)}
                defaultValue={title}
                onBlur={({ currentTarget }) => {
                    if (edit === id) {
                        dispatch(renamePage({ id, title: currentTarget.value }));
                        dispatch(editPage({ id: '' }));
                    }
                }}
                readOnly={edit === ''}
                onClick={() => edit === '' && dispatch(setActivePage({ id }))}
            /> */}
            <button onClick={() => dispatch(menuPage({ id }))}>:</button>
            {menu === id && <PageMenu id={id} />}
        </span>
    );
};

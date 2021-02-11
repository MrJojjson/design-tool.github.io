import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { editPage, removePage } from '../../../../redux/actions/pageAction';
import { IPage, PageActions } from '../../../../redux/types/pageTypes';

export const PageMenu = ({ id }: Pick<IPage, 'id'>) => {
    const dispatch: Dispatch<PageActions> = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(removePage({ id }))}>Remove</button>
            <button onClick={() => dispatch(editPage({ id }))}>Rename</button>
        </div>
    );
};

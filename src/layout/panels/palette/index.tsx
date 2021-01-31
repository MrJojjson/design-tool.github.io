import { map } from 'ramda';
import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPage, removePage, setActivePage } from '../../../redux/actions/pageAction';
import { IStoreState } from '../../../redux/storeState';
import { IPage, PageActions, PagesState } from '../../../redux/types/pageTypes';

interface IPalette {
    activePage?: string;
}

export const Palette = (): JSX.Element => {
    const dispatch: Dispatch<PageActions> = useDispatch();
    const { active, defined = [] } = useSelector<IStoreState, PagesState>(({ pages }) => pages);

    return (
        <div className="palette">
            <div className="pages">
                {map(
                    ({ name, id }: IPage) => (
                        <input
                            disabled={active === id}
                            value={name}
                            // onChange={(event) => {
                            //     const changedPageIndex = findIndex(propEq('id', id))(pages);
                            //     pages[changedPageIndex].name = event.currentTarget.value;
                            //     setPages([...pages]);
                            //     console.log('pages', pages);
                            // }}
                            onClick={() => dispatch(removePage({ id }))}
                        />
                    ),
                    defined,
                )}
                <button onClick={() => dispatch(addPage())}>Add page</button>
            </div>
            <div className="page-content"></div>
        </div>
    );
};

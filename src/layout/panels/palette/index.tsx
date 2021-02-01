import { map } from 'ramda';
import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArtboard } from '../../../redux/actions/artboardAction';
import { addPage } from '../../../redux/actions/pageAction';
import { IStoreState } from '../../../redux/storeState';
import { ArtboardActions } from '../../../redux/types/artboardTypes';
import { IPage, PageActions, PagesState } from '../../../redux/types/pageTypes';
import { uniquePageId } from '../../../utils/uniqueId';
import { Page } from './pages/page';

export const Palette = (): JSX.Element => {
    const dispatch: Dispatch<PageActions | ArtboardActions> = useDispatch();
    const { defined = [], active } = useSelector<IStoreState, PagesState>(({ pages }) => pages);

    return (
        <div className="palette">
            <div className="pages">
                {map(
                    (props: IPage) => (
                        <Page {...props} />
                    ),
                    defined,
                )}
                <button
                    onClick={() => {
                        const uid = uniquePageId();

                        dispatch(addPage({ id: uid }));
                        dispatch(addArtboard({ pageId: uid }));
                    }}
                >
                    Add page
                </button>
            </div>
            <div className="page-content"></div>
        </div>
    );
};

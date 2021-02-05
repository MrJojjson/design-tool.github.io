import { map } from 'ramda';
import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArtboard } from '../../../redux/actions/artboardAction';
import { getPageArtboards } from '../../../redux/selectors/artboardSelector';
import { IStoreState } from '../../../redux/storeState';
import { ArtboardActions } from '../../../redux/types/artboardTypes';
import { PagesState } from '../../../redux/types/pageTypes';
import { Artboard } from './artboard';
import './artboardStyle.css';

export const Artboards = (): JSX.Element => {
    const dispatch: Dispatch<ArtboardActions> = useDispatch();
    const { active: pageId } = useSelector<IStoreState, PagesState>(({ pages }) => pages);

    const artboards = useSelector((state: IStoreState) => getPageArtboards({ state, pageId }));

    return (
        <div className="artboards">
            <button onClick={() => dispatch(addArtboard({ pageId }))}>Add artboard</button>
            <div className="artboards-content">
                {map(
                    (props) => (
                        <Artboard {...props} />
                    ),
                    artboards,
                )}
            </div>
        </div>
    );
};

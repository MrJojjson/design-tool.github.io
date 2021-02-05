import { filter, propEq } from 'ramda';
import { IStoreState } from '../storeState';
import { ArtboardState } from '../types/artboardTypes';
import { IPage } from '../types/pageTypes';

export const getArtboardState = ({ artboards }: IStoreState): ArtboardState => artboards;
export const getArtboardDefinedState = (state: IStoreState): ArtboardState['defined'] =>
    getArtboardState(state).defined;

type IGetPageArtboards = {
    state: IStoreState;
    pageId: IPage['id'];
};

export const getPageArtboards = ({ state, pageId }: IGetPageArtboards): ArtboardState['defined'] => {
    const pageArtboards = filter(propEq('pageId', pageId), getArtboardDefinedState(state));
    return pageArtboards;
};

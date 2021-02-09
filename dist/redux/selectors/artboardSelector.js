import {filter, propEq} from "../../../_snowpack/pkg/ramda.js";
export const getArtboardState = ({artboards}) => artboards;
export const getArtboardDefinedState = (state) => getArtboardState(state).defined;
export const getPageArtboards = ({state, pageId}) => {
  const pageArtboards = filter(propEq("pageId", pageId), getArtboardDefinedState(state));
  return pageArtboards;
};

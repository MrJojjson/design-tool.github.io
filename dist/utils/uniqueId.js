let lastPageId = 0;
let lastArtboardId = 0;
export const uniquePageId = () => {
  lastPageId += 1;
  return `pageId${lastPageId}`;
};
export const uniqueArtboardId = () => {
  lastArtboardId += 1;
  return `artboardId${lastArtboardId}`;
};

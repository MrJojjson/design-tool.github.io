let lastPageId = 0;
let lastArtboardId = 0;

export const uniquePageId = (): string => {
    lastPageId += 1;
    return `pageId${lastPageId}`;
};

export const uniqueArtboardId = (): string => {
    lastArtboardId += 1;
    return `artboardId${lastArtboardId}`;
};

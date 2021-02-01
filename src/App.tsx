import React from 'react';
import { Artboards } from './layout/panels/artboards';
import { Palette } from './layout/panels/palette';

export const App = (): JSX.Element => {
    return (
        <div className="App">
            <Palette />
            <Artboards />
        </div>
    );
};

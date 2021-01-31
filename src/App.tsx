import React from 'react';
import { DragComp } from './DragComp';
import { Content } from './layout/panels/content';
import { Palette } from './layout/panels/palette';

export const App = (): JSX.Element => {
    return (
        <div className="App">
            <Palette />
            <Content />
        </div>
    );
};

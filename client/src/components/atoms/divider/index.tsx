import React from 'react';
import { themeType } from '../../../common/types/commonTypes';
import { Text } from '../text';
import './divider.style.scss';

type DividerType = {
    text?: string;
    width?: string;
    theme?: themeType;
};

export const Divider = ({ width = '100%', theme = 'secondary', text }: DividerType) => {
    if (text) {
        return (
            <div className="divider-with-text" style={{ width }}>
                <span className={`divider ${theme}`} />
                <Text oneLine>{text}</Text>
                <span className={`divider ${theme}`} />
            </div>
        );
    }
    return <span style={{ width }} className={`divider ${theme}`} />;
};

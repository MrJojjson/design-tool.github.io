import React from 'react';
import './text.style.scss';
import { themeType, fontSizeType, textTag } from '../../../common/types/commonTypes';

type TextType = {
    children: string;
    tag?: textTag;
    theme?: themeType;
    fontSize?: fontSizeType;
    oneLine?: boolean;
    className?: string;
};

export const Text = ({
    tag = 'p',
    children,
    theme = 'primary',
    fontSize = 'm',
    oneLine,
    className,
    ...rest
}: TextType) => {
    return React.createElement(
        tag,
        { className: `text ${theme} ${tag} ${fontSize} ${oneLine ? 'line' : null} ${className}`, ...rest },
        children,
    );
};

import React from 'react';
import { Link as ReachLink } from '@reach/router';
import './link.style.scss';
import { themeType, fontSizeType } from '../../../common/types/commonTypes';

type LinkType = {
    to: string;
    title?: string;
    theme?: themeType;
    fontSize?: fontSizeType;
    children?: JSX.Element;
    className?: string;
};

export const Link = ({ to, title, theme = 'primary', fontSize = 'm', children, className }: LinkType) => {
    if (children) {
        return (
            <ReachLink to={to} className={`link ${theme} ${fontSize} ${className}`}>
                {children}
            </ReachLink>
        );
    }
    return (
        <ReachLink to={to} className={`link ${theme} ${fontSize}`}>
            {title}
        </ReachLink>
    );
};

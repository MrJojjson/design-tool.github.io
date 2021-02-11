import React from 'react';
import { Link as ReachLink } from '@reach/router';
import './link.style.scss';
import { themeType, fontSizeType } from '../../../common/types/commonTypes';

export type LinkType = {
    to: string;
    title?: string;
    theme?: themeType;
    fontSize?: fontSizeType;
    children?: JSX.Element;
    className?: string;
    hyper?: 'underline';
};

export const Link = ({ to, title, theme = 'primary', fontSize = 'm', children, className, hyper }: LinkType) => {
    return (
        <ReachLink to={to} className={`link ${theme} ${fontSize} ${className} ${hyper ? 'underline' : ''}`}>
            {children || title}
        </ReachLink>
    );
};

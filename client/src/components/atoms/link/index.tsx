import React from 'react';
import { Link as ReachLink } from '@reach/router';
import './link.style.scss';
import { themeType, fontSizeType } from '../../../common/types/commonTypes';

type LinkType = {
    to: string;
    title: string;
    theme?: themeType;
    fontSize?: fontSizeType;
};

export const Link = ({ to, title, theme = 'primary', fontSize = 'm' }: LinkType) => {
    return (
        <ReachLink to={to} className={`link ${theme} ${fontSize}`}>
            {title}
        </ReachLink>
    );
};

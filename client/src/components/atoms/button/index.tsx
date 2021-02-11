import React from 'react';
import { buttonType } from '../../../common/types/buttonTypes';
import { themeType } from '../../../common/types/commonTypes';

import './button.style.scss';

type ButtonType = {
    onClick: () => void;
    label: string;
    type?: buttonType;
    theme?: themeType;
    className?: string;
};

export const Button = ({ onClick, label, theme = 'primary', className, ...rest }: ButtonType) => {
    return (
        <button onClick={() => onClick} className={`button ${theme} ${className}`} {...rest}>
            {label}
        </button>
    );
};

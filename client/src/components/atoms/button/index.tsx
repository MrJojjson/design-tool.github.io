import React from 'react';
import { buttonType } from '../../../common/types/buttonTypes';
import { themeType } from '../../../common/types/commonTypes';

import './button.style.scss';

type ButtonType = {
    onClick: () => void;
    label: string;
    type?: buttonType;
    theme?: themeType;
};

export const Button = ({ onClick, label, theme = 'primary', ...rest }: ButtonType) => {
    return (
        <button onClick={() => onClick} className={`button ${theme}`} {...rest}>
            {label}
        </button>
    );
};

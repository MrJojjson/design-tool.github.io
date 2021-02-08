import React, { ChangeEvent } from 'react';
import { themeType } from '../../../common/types/commonTypes';
import { inputAutoCompleteTypes, inputType } from '../../../common/types/inputTypes';
import { Text } from '../text';
import './input.style.scss';

type InputType = {
    onChange: (event: ChangeEvent<EventTarget & HTMLInputElement>) => void;
    label: string;
    id: string;
    type: inputType;
    placeholder: string;
    error?: string;
    theme?: themeType;
    value?: string;
    autoComplete?: inputAutoCompleteTypes;
    required?: boolean;
};

export const Input = ({ onChange, label, theme, error, ...rest }: InputType) => {
    console.log('error', error);

    return (
        <div className={`input-wrapper error--${error ? 'show' : 'hide'}`}>
            <input onChange={(event) => onChange(event)} {...rest} />
            <label htmlFor={rest.id}>{label}</label>
            <Text theme="secondary" className="error">
                {error}
            </Text>
        </div>
    );
};

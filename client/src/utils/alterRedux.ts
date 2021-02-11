/* eslint-disable @typescript-eslint/no-explicit-any */
import { curry, map, when, propEq, assoc } from 'ramda';

interface IAlterReduxArray {
    array: readonly Record<string, any>[];
    id: string | undefined;
    value: string | number | boolean;
    valueKey: string;
}

export const alterReduxArray = curry(({ array, id, value, valueKey }: IAlterReduxArray) => {
    return map(when(propEq(`id`, id), assoc(`${valueKey}`, value)), array);
});

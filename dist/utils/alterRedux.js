import {curry, map, when, propEq, assoc} from "../../_snowpack/pkg/ramda.js";
export const alterReduxArray = curry(({array, id, value, valueKey}) => {
  return map(when(propEq(`id`, id), assoc(`${valueKey}`, value)), array);
});

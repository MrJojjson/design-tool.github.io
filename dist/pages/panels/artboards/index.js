import{map as c}from"../../../../_snowpack/pkg/ramda.js";import t from"../../../../_snowpack/pkg/react.js";import{useDispatch as d,useSelector as o}from"../../../../_snowpack/pkg/react-redux.js";import{addArtboard as m}from"../../../redux/actions/artboardAction.js";import{getPageArtboards as n}from"../../../redux/selectors/artboardSelector.js";import{Artboard as p}from"./artboard.js";import"./artboardStyle.css";export const Artboards=()=>{const e=d(),{active:a}=o(({pages:r})=>r),s=o(r=>n({state:r,pageId:a}));return t.createElement("div",{className:"artboards"},t.createElement("button",{onClick:()=>e(m({pageId:a}))},"Add artboard"),t.createElement("div",{className:"artboards-content"},c(r=>t.createElement(p,{...r}),s)))};

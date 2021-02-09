import {map} from "../../../../_snowpack/pkg/ramda.js";
import React from "../../../../_snowpack/pkg/react.js";
import {useDispatch, useSelector} from "../../../../_snowpack/pkg/react-redux.js";
import {useAddPage, useGetPages} from "../../../api/pages.js";
import {uniquePageId} from "../../../utils/uniqueId.js";
import {Page} from "./pages/page.js";
export const Palette = () => {
  const dispatch = useDispatch();
  const {defined = [], active} = useSelector(({pages: pages2}) => pages2);
  const {onAddPage} = useAddPage();
  const {loading, error, pages = []} = useGetPages();
  console.log("pages", pages);
  console.log("loading", loading);
  return /* @__PURE__ */ React.createElement("div", {
    className: "palette"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pages"
  }, map((props) => /* @__PURE__ */ React.createElement(Page, {
    ...props
  }), pages), /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      const uid = uniquePageId();
      onAddPage({title: "xczvxzcx"});
    }
  }, "Add page")), /* @__PURE__ */ React.createElement("div", {
    className: "page-content"
  }));
};

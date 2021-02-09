// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.input-wrapper {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  transition: all 0.25s;\n}\n.input-wrapper input {\n  border-radius: 5px;\n  padding: 0px 15px;\n  height: 50px;\n  transition: all 0.25s;\n  border: 1px solid #4a4a4a;\n  box-sizing: border-box;\n  min-width: 20vw;\n}\n.input-wrapper input:hover {\n  border-radius: 2.5px;\n}\n.input-wrapper input:focus {\n  border-radius: 2.5px;\n}\n.input-wrapper input:not(:placeholder-shown) + label {\n  transition: all 0.25s;\n  position: absolute;\n  top: -13.3333333333px;\n  background-color: white;\n  border: 1px solid #4a4a4a;\n  opacity: 1;\n}\n.input-wrapper label,\n.input-wrapper .error {\n  border-radius: 5px;\n  padding: 1px 15px;\n  border: none;\n  transition: all 0.25s;\n  position: absolute;\n  opacity: 0;\n  font-size: 0.875rem;\n}\n.input-wrapper label {\n  top: 0;\n  left: 0;\n  border-bottom-left-radius: 0;\n}\n.input-wrapper .error {\n  right: 0;\n  bottom: 0;\n  border-top-right-radius: 0;\n}\n.input-wrapper.error--show .error {\n  transition: all 0.25s;\n  position: absolute;\n  bottom: 13.3333333333px;\n  background-color: #c0392b;\n  border: none;\n  opacity: 1;\n}\n.input-wrapper.primary {\n  color: #4a4a4a;\n  background-color: white;\n  border: 1px solid #4a4a4a;\n}\n.input-wrapper.secondary {\n  color: #ffffff;\n  background-color: #2c3e50;\n  border: 1px solid #ffffff;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
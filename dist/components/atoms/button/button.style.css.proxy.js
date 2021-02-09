// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.button {\n  border: none;\n  border-radius: 5px;\n  padding: 5px 15px;\n  height: 50px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: all 0.25s;\n}\n.button.primary {\n  color: #4a4a4a;\n  background-color: white;\n  border: 1px solid #4a4a4a;\n}\n.button.secondary {\n  color: #ffffff;\n  background-color: #2c3e50;\n  border: 1px solid #ffffff;\n}\n.button:hover {\n  border-radius: 2.5px;\n}\n.button:active {\n  transform: translateY(1px);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
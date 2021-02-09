// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.divider {\n  width: 100%;\n  height: 5px;\n  border-radius: 50px;\n}\n.divider.primary {\n  background-color: white;\n}\n.divider.secondary {\n  background-color: #2c3e50;\n}\n\n.divider-with-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.divider-with-text .text {\n  padding: 0px 5px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
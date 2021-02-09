// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.navbar {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  border-right: 1px solid #4a4a4a;\n  max-width: 15vw;\n  width: 100%;\n  height: 100%;\n}\n.navbar .content {\n  padding: 10px;\n  box-sizing: border-box;\n  height: 85%;\n}\n.navbar .profile {\n  padding: 10px;\n  box-sizing: border-box;\n  height: 15%;\n  background-color: #2c3e50;\n  width: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
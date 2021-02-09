// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.login,\n.register {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.login .title,\n.register .title {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n  height: 30%;\n}\n.login .title .text,\n.register .title .text {\n  margin-bottom: 25px;\n}\n.login .form,\n.register .form {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 40%;\n}\n.login .form input,\n.login .form button,\n.register .form input,\n.register .form button {\n  margin-bottom: 25px;\n  min-width: 25vw;\n}\n.login .navigation,\n.register .navigation {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  height: 30%;\n}\n.login .navigation .divider-with-text,\n.register .navigation .divider-with-text {\n  margin-bottom: 25px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
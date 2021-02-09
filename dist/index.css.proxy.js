// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  outline: none;\n  text-decoration: none;\n  font-size: 1rem;\n  font-family: \"NotoSans\";\n}\n\nbody,\nhtml,\n#root,\n.app {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  margin: 0;\n}\n\n.router {\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  max-width: 85vw;\n  width: 100%;\n}\n\n.palette {\n  width: 20vw;\n  height: 100%;\n  border-right: 2px solid #ddd;\n  background-color: #eee;\n}\n\n.pages {\n  min-height: 10vh;\n  border-bottom: 1px solid #000;\n}\n\n.artboards {\n  width: 80vw;\n  height: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
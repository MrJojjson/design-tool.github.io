// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".artboards {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    border-top: 1px solid #000;\n    position: relative;\n}\n\n.artboards-content {\n    display: flex;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n}\n\n.artboard {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 450px;\n    width: 450px;\n    height: 600px;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    margin-right: 50px;\n}\n\n.artboard:first-of-type {\n    margin-left: 50px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
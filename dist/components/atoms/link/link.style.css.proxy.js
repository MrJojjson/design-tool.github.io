// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.link {\n  transition: all 0.25s;\n}\n.link.primary {\n  color: #4a4a4a;\n}\n.link.secondary {\n  color: #ffffff;\n}\n.link.s {\n  font-size: 0.875rem;\n}\n.link.m {\n  font-size: 1rem;\n}\n.link.l {\n  font-size: 1.25rem;\n}\n.link.xl {\n  font-size: 1.5rem;\n}\n.link[aria-current] {\n  color: #d35400;\n  font-weight: 100;\n}\n.link:hover {\n  color: #d35400;\n}\n.link:active {\n  transform: translateY(1px);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
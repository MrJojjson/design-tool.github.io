// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/** MAIN */\n.text {\n  width: auto;\n  padding: 0px;\n  margin: 0px;\n}\n.text.primary {\n  color: #4a4a4a;\n}\n.text.secondary {\n  color: #ffffff;\n}\n.text.p.s, .text.span.s {\n  font-size: 0.875rem;\n}\n.text.p.m, .text.span.m {\n  font-size: 1rem;\n}\n.text.p.l, .text.span.l {\n  font-size: 1.25rem;\n}\n.text.p.xl, .text.span.xl {\n  font-size: 1.5rem;\n}\n.text.h1.s, .text.h2.s, .text.h3.s, .text.h4.s {\n  font-size: 1.25rem;\n}\n.text.h1.m, .text.h2.m, .text.h3.m, .text.h4.m {\n  font-size: 1.75rem;\n}\n.text.h1.l, .text.h2.l, .text.h3.l, .text.h4.l {\n  font-size: 2.25rem;\n}\n.text.h1.xl, .text.h2.xl, .text.h3.xl, .text.h4.xl {\n  font-size: 2.75rem;\n}\n.text.line {\n  white-space: nowrap;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}
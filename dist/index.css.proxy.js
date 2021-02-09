if(typeof document!="undefined"){const e=`* {
  outline: none;
  text-decoration: none;
  font-size: 1rem;
  font-family: "NotoSans";
}

body,
html,
#root,
.app {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0;
}

.router {
  width: 100%;
  height: 100%;
}

.content {
  max-width: 85vw;
  width: 100%;
}

.palette {
  width: 20vw;
  height: 100%;
  border-right: 2px solid #ddd;
  background-color: #eee;
}

.pages {
  min-height: 10vh;
  border-bottom: 1px solid #000;
}

.artboards {
  width: 80vw;
  height: 100%;
}`,n=document.createElement("style"),t=document.createTextNode(e);n.type="text/css",n.appendChild(t),document.head.appendChild(n)}

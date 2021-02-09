if(typeof document!="undefined"){const e=`.artboards {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-top: 1px solid #000;
    position: relative;
}

.artboards-content {
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}

.artboard {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 450px;
    width: 450px;
    height: 600px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-right: 50px;
}

.artboard:first-of-type {
    margin-left: 50px;
}
`,n=document.createElement("style"),t=document.createTextNode(e);n.type="text/css",n.appendChild(t),document.head.appendChild(n)}

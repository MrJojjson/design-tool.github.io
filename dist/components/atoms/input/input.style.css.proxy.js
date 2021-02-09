if(typeof document!="undefined"){const r=`/** MAIN */
.input-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: relative;
  transition: all 0.25s;
}
.input-wrapper input {
  border-radius: 5px;
  padding: 0px 15px;
  height: 50px;
  transition: all 0.25s;
  border: 1px solid #4a4a4a;
  box-sizing: border-box;
  min-width: 20vw;
}
.input-wrapper input:hover {
  border-radius: 2.5px;
}
.input-wrapper input:focus {
  border-radius: 2.5px;
}
.input-wrapper input:not(:placeholder-shown) + label {
  transition: all 0.25s;
  position: absolute;
  top: -13.3333333333px;
  background-color: white;
  border: 1px solid #4a4a4a;
  opacity: 1;
}
.input-wrapper label,
.input-wrapper .error {
  border-radius: 5px;
  padding: 1px 15px;
  border: none;
  transition: all 0.25s;
  position: absolute;
  opacity: 0;
  font-size: 0.875rem;
}
.input-wrapper label {
  top: 0;
  left: 0;
  border-bottom-left-radius: 0;
}
.input-wrapper .error {
  right: 0;
  bottom: 0;
  border-top-right-radius: 0;
}
.input-wrapper.error--show .error {
  transition: all 0.25s;
  position: absolute;
  bottom: 13.3333333333px;
  background-color: #c0392b;
  border: none;
  opacity: 1;
}
.input-wrapper.primary {
  color: #4a4a4a;
  background-color: white;
  border: 1px solid #4a4a4a;
}
.input-wrapper.secondary {
  color: #ffffff;
  background-color: #2c3e50;
  border: 1px solid #ffffff;
}`,n=document.createElement("style"),o=document.createTextNode(r);n.type="text/css",n.appendChild(o),document.head.appendChild(n)}

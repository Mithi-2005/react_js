import React from "react";
import ReactDom from "react-dom/client"
let h1=React.createElement('h1',{},"This is h1 tag");
let root=ReactDom.createRoot(document.getElementById('root'));
root.render(h1);

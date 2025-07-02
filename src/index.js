import React from "react";
import ReactDom from "react-dom/client"
import Menu_class from "./class_comp";
import Sm from "./jsx_attr";
// import Styling from "./styling";
import Name from "./props";
import Cname from "./classprops";
function Menu(){
    let menus=['Home','About','Contct Us']
    return (
        <ul>
            <li>{menus[0]}</li>
            <li>{menus[1]}</li>
            <li>{menus[2]}</li>
        </ul>
    )
}
var root=ReactDom.createRoot(document.getElementById('root'))
root.render(
    <div>
<Cname name='Mithilesh' age='19'/>
<Cname name='King' age='20'/>
</div>
)

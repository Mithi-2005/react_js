import React from "react";
import ReactDom from "react-dom/client"


class Menu_class extends React.Component{
    render(){
       let menus=['Home','About','Contct Us']
    return (
        <ul>
            <li>{menus[0]}</li>
            <li>{menus[1]}</li>
            <li>{menus[2]}</li>
        </ul>
    )
}
}
export default Menu_class
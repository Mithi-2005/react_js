import React from "react";
import ReactDom from "react-dom/client"
import Menu_class from "./class_comp";
import Sm from "./jsx_attr";
// import Styling from "./styling";
import Cname from "./classprops";
import Name from "./props";
import Para from "./child_props";
import Divs from "./fragments";
import ClickEvent from "./events";
import CounterApp from "./counterapp";
import PriceChange from "./setstate_learn";
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

// let users=[
//     {
//         id:1,
//         name:'Mithilesh',
//         age:19
//     },
//     {
//         id:2,
//         name:'Hareeswar',
//         age:18
//     },
//     {
//         id:3,
//         name:'Parasuram',
//         age:20
//     }
// ]
// root.render (
//     <div>
//         {
//             users.map(
//                 (u)=>{
//                     return <Cname key={u.id} name={u.name} age={u.age} />
//                 }
//             )
//         }
//     </div>
// )



// root.render(
//     <div>
//         <Para name='Mithilesh'> Iam The King Here
//             <button>Yes</button> {/*You can also add buttons here */}
//             <button>No</button>
//              </Para>
//     </div>
// )

root.render(
    <PriceChange/>
)
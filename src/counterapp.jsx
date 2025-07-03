import React ,{useState} from "react";

function CounterApp(props){
    let [counter,UpdateCounter]=useState(0)  // useState(intial_value) return value,function (function is that can be used to change that state)

    return (
        <>
            <h1>Counter : {counter}</h1>
            <br></br>
            <button onClick={()=>{UpdateCounter(++counter)}}>Increment</button>
        </>
    )
}

// class CounterApp extends React.Component{
//     state={
//         counter : 0 //This is intial value
//     }

//     render(){
//         return (
//             <>
//                  <h1>Counter : {this.state.counter}</h1>
//                  <br></br>
//                  <button onClick={()=>{this.setState(++this.state.counter)}}>Increment</button>
//             </>
//         )
//     }
// }
export default CounterApp
import React from "react";

// class PriceChange extends React.Component{
//     state={
//         name:'IQOO Z7s',
//         price: 19999
//     }
//     render(){
//         return(
//             <>
//                 <h3> Name : {this.state.name}</h3>
//                 <h3>Price : {this.state.price}</h3>
//                 <input type="number" id='price'/>
//                 <button onClick={()=>{
//                     let p=document.getElementById('price').value
//                     this.setState({
//                         price: p
//                     })
//                 }}>Update</button>
//             </>
//         )
//     }
// }



class PriceChange extends React.Component{
    constructor(){
        super()
        this.updatePrice=this.updatePrice.bind(this) /// To use 'this' pointer in updatePrice function
    }
    state={
        name:'IQOO Z7s',
        price: 19999
    }
    render(){
        return(
            <>
                <h3> Name : {this.state.name}</h3>
                <h3>Price : {this.state.price}</h3>
                <input type="number" id='price'/>
                <button onClick={this.updatePrice}>Update</button>
            </>
        )
    }

    updatePrice(){
        let p=document.getElementById('price').value
                    this.setState({
                        price: p
                    },()=>{    ///This is the callback function i.e the work you want to do after set state if you write seperately like not in use state then those lines will be executed first because useState is async function
                        console.log(this.state)
                    })
                    console.log(this.state.price) // Shows old price because setState is still running but this will be executed before that becuse that is async function
        
    }
}

export default PriceChange
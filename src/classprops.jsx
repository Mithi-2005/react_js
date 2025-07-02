import React from "react";

class cname extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>Name: {this.props.name} <br></br> Age : {this.props.age}</h1>
        )
    }
}
export default cname
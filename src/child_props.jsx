function Para(props){
    return(
        <div>
            <p>my name is {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}


export default Para
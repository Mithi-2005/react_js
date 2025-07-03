function ClickEvent(props){
    function message(num=0,e){
        alert('Button Clicked ' + e.target + num)
    }

    return (
        <>
            <button onClick={message}>Click</button>
            <button onClick={(e)=>{message(9,e)}}>Click 2</button> {/*You can also pass e cannot directly call a function without arrow function */}
        </>

    )
}

export default ClickEvent
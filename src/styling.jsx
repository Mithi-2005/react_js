import './styling.css'
function styling(){
    let s1={
        color:'white',
        background:'black',
        marginTop:'90px' //All - replace with cap letters ex: margin-top to marginTop
    }
    return(
        <div>
            <h1>Hello</h1>
            <p style={s1}>This is a paragraph</p>
            <p className='para'>Hello</p>
            <h1 id='heading'>Byee</h1>
        </div>
    )
}
export default styling

function Student(props)
{
    const style={
        border : "2px solid red",
        margine : "2px",
        background :"blue",
        fontSize:"12px",
        fontWeight:"Bold",
        fontStyle:"Italic",
        
    };
    return(
        <div style={style}>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>City: {props.city}</h1>
        </div>
    );
}
export default Student;
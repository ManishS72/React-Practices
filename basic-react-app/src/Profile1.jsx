
function Profile1(props)
{
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <p>Age : {props.age}</p>
            <p>College : {props.college}</p>
        </div>
    );
}
export default Profile1;
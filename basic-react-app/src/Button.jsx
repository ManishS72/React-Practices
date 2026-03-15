
function printHello()
{
    console.log("Hello, Manish Sharma");
}

function printDemo()
{
    console.log("Bye!");
}

function Button()
{
    return(
        <div>
            <button onClick={printHello}>Click Me</button>
            <p onClick={printDemo}>It is a React Event Handling</p>
        </div>
    );
}

export default Button;
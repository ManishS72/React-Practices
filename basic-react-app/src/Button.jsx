
function printHello()
{
    console.log("Hello, Manish Sharma");
}

function Button()
{
    return(
        <div>
            <button onClick={printHello}>Click Me</button>
        </div>
    );
}

export default Button;
// Embeding jsx

function Sum(){
    var a = 3+5
    return a
}

const header = <h2>JSX Expression</h2>
const Jsxhead = ()=>{
    var name = "Amit";
    var age = 20;
    var demo = null;
    var undefind;
    let bool = true.toString();
    let d = [1,2,3,4,5]
    return(
    <>
    <h1>Let's Learn JSX</h1>
    {header}
    <h1>Hello {name}!</h1>
    <h2>My Age is {age}.</h2>
    <h3>bool value: {bool}</h3>
    <p>value demo: {demo}</p>
    <p>value undefined: {undefind}</p>
    <p>Calling the function: {Sum()}</p>
    <p>calling Array: {d}</p>
    </>
    );
};



ReactDOM.createRoot(document.getElementById("root")).render(<><Jsxhead/></>)
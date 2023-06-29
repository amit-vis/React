//********** */ JAVASCRIPT ****/
// const heading = document.createElement('h2');
// heading.textContent = "hello Amit"
// heading.className = "header"
// document.getElementById('root').appendChild(heading)

// console.log(heading);

/** REACT with JS*/

// const reactHeading = React.createElement("h1",{className: "head", id: "reactHead", children: "Hello React!"});

// // console.log(reactHeading)
// // ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// const reactImg = React.createElement("img",{src:"https://files.codingninjas.in/coding-ninjas-24647.png"})
// // ReactDOM.createRoot(document.getElementById("root")).render(reactImg)

// // console.log('image', reactImg)

// const reactButton = React.createElement("button", {id: "btn"}, "Say Hello");
// ReactDOM.createRoot(document.getElementById("root")).render(reactButton)

/**React with JSX */
// const jsxHeading =<React.Fragment>
//                     <h1 id="head">Hello JSX!</h1>
//                      <p>This the paragraph for JSX!</p>
//                      </React.Fragment>
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading)

// const Heading = <><center>
//                     <h1>About React</h1>
//                     <ul>
//                         <li>Simplicity in code</li>
//                         <li>Better performance</li>
//                         <li>vertual Dom Features</li>
//                     </ul>
//                 </center></>

// // component usage of react
// function App(){
//     return(
//         <><center>
//                      <h1>About React</h1>
//                      <ul>
//                          <li>Simplicity in code</li>
//                          <li>Better performance</li>
//                          <li>vertual Dom Features</li>                     
//                     </ul>
//                  </center></>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
var App = function Name(){
    return(
        <>
        <p>Here is the XML</p>
        </>
    )
}

var App = ()=>
    (
<>
<h1>React with Arrow function</h1>
<p>Here is the another function</p>
</>
)


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

// function App1(){
//     return <><h1>This is the a functional component</h1></>
// }


// const App2 = ()=>{
//     return <><h1>This is also a functional component</h1></>
// };


// const App3 = ()=> <><h1>This is a JSX Expression</h1></>;
// ReactDOM.createRoot(document.getElementById("root")).render(<App1/>)
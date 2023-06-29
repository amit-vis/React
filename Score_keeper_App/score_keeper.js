let score = 0;
let wicket = 0;

function addNum(num){
    score += num;
    rootElement.render(<App/>);
}
function addWicket(){
    wicket += 1
    rootElement.render(<App/>);
}

const App = ()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <div>
        <button onClick={()=>addNum(1)}>1</button>
        <button onClick={()=>addNum(2)}>2</button>
        <button onClick={()=>addNum(3)}>3</button>
        <button onClick={()=>addNum(4)}>4</button>
        <button onClick={()=>addNum(5)}>5</button>
        <button onClick={()=>addNum(6)}>6</button>
        <button onClick={addWicket}>wicket</button>
    </div>
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);
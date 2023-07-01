let score = 0;
let wicket = 0;
let ballWiseRes = [];

function addNum(num){
    if(wicket<10){
        ballWiseRes.push(num);
        score += num;
        rootElement.render(<App/>);
        console.log(ballWiseRes)
    }
}
function addWicket(){
    if(wicket<10){
        ballWiseRes.push("W");
        wicket += 1
        rootElement.render(<App/>);
        console.log(ballWiseRes)
    }
}

const ScoreButtons = ()=>(
    <div>
        <button onClick={()=>addNum(0)}>0</button>
        <button onClick={()=>addNum(1)}>1</button>
        <button onClick={()=>addNum(2)}>2</button>
        <button onClick={()=>addNum(3)}>3</button>
        <button onClick={()=>addNum(4)}>4</button>
        <button onClick={()=>addNum(5)}>5</button>
        <button onClick={()=>addNum(6)}>6</button>
        <button onClick={addWicket}>wicket</button>
    </div>

)

const Result = ()=>(
    <div>
        {ballWiseRes.map((res, index)=>(
            <>
            {index % 6 ===0?<br/>:null}
            <span key={index} style={res == "W"? {color: "red"}:null}>{res ===0?<strong>.</strong>: res}</span>&nbsp;&nbsp;&nbsp;</>
        ))}
    </div>
)

const App = ()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <ScoreButtons/>
    <Result/>
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);
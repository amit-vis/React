let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();

function addNum(num){
    hit = num
    rootElement.render(<App/>);
    console.log(hit)
    }

function addWicket(){
    hit = "W"
    rootElement.render(<App/>);
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
);

function handleSubmit(event){
    event.preventDefault();
    
    if (hit == "W"){
        if(wicket<10){
            wicket += 1;
        }
        
    }else{
        if(wicket<10){
            score += hit

        }
    }
    rootElement.render(<App/>);
    console.log(inputRef.current)
    if (wicket<10){
        ballWiseRes.unshift(
            // <span>{hit}{","}{inputRef.current.value}</span>
            <span>{`${hit},${inputRef.current.value}`}</span>
        );
    }
    

    hit = 0
    inputRef.current.value = "";
}

const Form = ()=>(
    <form onSubmit={handleSubmit}>
        <input value={hit}/>
        <input ref={inputRef} placeholder="Add a Comment"/>
        <button>Submit</button>
    </form>
)

const App = ()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE: {score}/{wicket}</h2>
    <ScoreButtons/>
    <br />
    <Form />
    <hr />
    {ballWiseRes.map((res, index)=>(
        <p key={index}>{res}</p>
    ))}
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);
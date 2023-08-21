import React from "react";

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            time: 0,
            stop: false
        }

        this.timer = null;
        console.log("TimerOne Constructor")
    }

    static getDerivedStateFromProps() {
        console.log("TimerOne getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.time)
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 ===0;
    }

    // updateCount=()=>{
    //     this.setState((prevState)=>{
    //         return {count: prevState.count +1}
    //     })
    // }

    // handleStopStart = ()=>{
    //     if(this.state.stop){
    //         this.timer = setInterval(()=>{
    //             this.setState((prevState)=>({
    //                 time: prevState.time -1,
    //                 stop: true
    //             }));
    //         },1000)
    //     }else{
    //         clearInterval(this.timer)
    //     }
    //     this.setState((prevState)=>({
    //         stop: !prevState.stop
    //     }))
    // }
    // handleStopStart = () => {
    //     if (this.state.stop) {
    //         clearInterval(this.timer)
    //     } else {
    //         this.timer = setInterval(() => {
    //             this.setState((prevState) => ({
    //                 time: prevState.time - 1,
    //                 stop: true
    //             }));
    //         }, 1000);
    //     }

    //     this.setState((prevState) => ({
    //         stop: !prevState.stop
    //     }));
    // };

    render() {
        console.log("TimerOne render")
        return (
            <>
                <h1>Timer spent: {new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h1>
            </>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("TimerOne getSnapshotBeforeUpdate")
        return 5
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("TimerOne componentDidUpdate")
        console.log("------------------------------------------")
        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState((prevState)=>({
                        time: prevState.time+1,
                    }))
                },1000)
            }else{
                clearInterval(this.timer)
            }
        }
        // if(this.state.time === 0){
        //     clearInterval(this.timer)
        // }
    }
    componentWillUnmount() {
        console.log("TimerOne componentWillUnmount")
        clearInterval(this.timer)
    }
}

export default Timer
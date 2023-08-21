import React, { Component } from 'react'
// import TimerOne from './Components/Timer/TimerOne'
import ComponentA from './Components/Component/ComponentA';
import ErrorBoundary from './ErrorBoundary';
import ComponentB from './Components/Component/ComponentB';

export default class App extends Component {
  constructor(){
    super();
    // this.state={
    //   timerOn: false
    // }
  }

  // handleMount = ()=>{
  //   this.setState((prevState)=>({
  //     mount: !prevState.mount
  //   }))
  // }

  // handleTimer = ()=>{
  //   this.setState((prevState)=>({
  //     timerOn: !prevState.timerOn
  //   }))
  // }
  render() {
    return (
      <>
      <h1>App</h1>
      {/* <button onClick={this.handleMount}>{this.state.mount? "UN-MOUNT": "MOUNT"}</button>
      <TimerOne timerOn={this.state.timerOn}/>
      <button onClick={this.handleTimer}>{this.state.timerOn? "STOP": "START"}</button> */}
      <ErrorBoundary>
        <ComponentA/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ComponentB/>
      </ErrorBoundary>
      </>
    )
  }
}


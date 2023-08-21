// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//   }

//   handleclick = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//     this.setState({
//       count: this.state.count + 1
//     })
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handleclick}>click me</button>
//         <p>{this.state.count}</p>
//       </>


//     )
//   }
// }

// export default App;

// const call = {
//   caller: "people",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   }
// };
// call.says();

// const call = {
//   caller: "people",
//   says: function () {
//     console.log(`Hey, ${this.caller} just called.`);
//   }
// };
// let newCall = call.says;
// newCall();

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={()=> this.props.count++}>Increment Count</button>
      </div>
    )
  }
}




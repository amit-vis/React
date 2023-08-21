import React, { Component } from 'react'

export default class ComponentB extends Component {
    constructor(){
        super();
        this.state={
            name: "ComponenetB",
            data: []
        }
        console.log("ComponentB constructor")
    }
    static getDerivedStateFromProps(){
      console.log("ComponentB getDerivedStateFromProps");
      return null
    }
    componentDidMount(){
      console.log("ComponentB componentDidMount")
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({data}))
    }
  render() {
    console.log("ComponentB render");
    return (
      <>
      <h2>{this.state.name}</h2>
      <ul>
        {this.state.data.map((d, info)=>
        <li key={info}>{d.username}</li>
        )}
      </ul>
      </>
    )
  }
}

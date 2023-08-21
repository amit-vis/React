import React, { Component } from 'react'
import ComponentB from './ComponentB';

export default class ComponentA extends Component {
    constructor(){
        super();
        this.state={
            name: "ComponenetA"
        }
        console.log("ComponentA constructor", this.setState.name)
    }
    static getDerivedStateFromProps(){
      console.log("ComponentA getDerivedStateFromProps");
      return null
    }
    componentDidMount(){
      console.log("ComponentA componentDidMount", this.setState.name)
    }
  render() {
    console.log("ComponentA render", this.state.name);
    return (
      <>
      <h1>{this.state.name}</h1>
      <ComponentB/>
      </>
    )
  }
}

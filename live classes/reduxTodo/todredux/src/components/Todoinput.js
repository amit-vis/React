import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {addTask} from '../actions';
import { connect } from 'react-redux';

class Todoinput extends Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='Add Task' ref='task'/>
        <button onClick={()=>this.props.addTask(this.refs.task.value)}>Add</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch)
}

export default connect(() => {},mapDispatchToProps)(Todoinput);

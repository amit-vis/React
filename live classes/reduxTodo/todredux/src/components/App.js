import '../App.css';

import React, { Component } from 'react'
import Header from './Header';
import Todoinput from './Todoinput';

export default class extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Todoinput/>
      </div>
    )
  }
}


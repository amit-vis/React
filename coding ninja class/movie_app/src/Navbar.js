import React, { Component } from 'react'
import Navbarstyle from "./Navbar.module.css"


export default class Navbar extends Component {
  render() {
    const {cartCount} = this.props;
    return (
      <>
        <div className={Navbarstyle.nav}>
          <div className={Navbarstyle.title}>
            Movie App
          </div>
          <div className={Navbarstyle.cartcontainer}>
            <img src='https://cdn-icons-png.flaticon.com/128/4290/4290854.png' alt='cart Icon' className={Navbarstyle.carticon}/>
            <span className={Navbarstyle.cartcount} >{cartCount}</span>
          </div>
        </div>
      </>
    )
  }
}


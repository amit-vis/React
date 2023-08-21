// import React, { Component } from 'react'

// export default class Students extends Component {
//   render() {
//     const {name, marks} = this.props
//     return (
//       <>
//       <h1>Hello, {name}</h1>
//       <p>You have Secured {marks} %</p>
//       <hr/>
//       </>
//     )
//   }
// }

import React from 'react'

function Students(props) {
  const {name, marks} = props
  return (
    <>
      <h1>Hello, {name}</h1>
      <p>You have Secured {marks} %</p>
      <hr />
    </>
  )
}

export default Students


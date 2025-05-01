import React, { Component } from 'react'

class Action extends Component {
    clickHandler() {
        alert("Clicked in Class Component")
    }
  render() {
    return (
      <div>
        <h1>Event Handling in Class Components</h1>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default Action

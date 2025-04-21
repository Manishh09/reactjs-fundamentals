import React, { Component } from 'react'

export class CounterWithPrevState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            count: 0
      }
    }
    changeCount = () => {
        this.setState(
            // a function that takes the previous state and props as arguments
            (prevState, props) => ({
                count: prevState.count + 1
            }),
            // a callback function
            () => {
                console.log("Count after setState using prevState: ", this.state.count);
            }
        )
    }

    incrementFourTimes = () => {
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
    }
    
  render() {
    return (
      <div>
        <div>
            <h1>Counter with Previous State</h1>
            <h2>{this.state.count}</h2>
        </div>

        <button onClick={() => this.incrementFourTimes() } >IncrementByFour</button>
      </div>
    )
  }
}

export default CounterWithPrevState

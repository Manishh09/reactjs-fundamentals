import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {

    constructor() {
      super(); // Call the parent constructor
        // Initialize the state of the Parent component
    
      this.state = {
         parentName: 'Parent Component',
      }
    }

    greetParent = (child) => {
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    
  render() {
    return (
        <div>
            <h1>Parent Component</h1>
            {/* place the child component here */}
            <Child  greetHandler={this.greetParent}/>
        </div>
    )
  }
}

export default Parent

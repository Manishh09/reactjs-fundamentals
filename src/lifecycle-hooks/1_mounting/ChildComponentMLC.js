import React, { Component } from 'react'

export class ChildComponentMLC extends Component {
  // Mounting Lifecycle Methods

  // 1. constructor
  constructor(props) {
    super(props); // Call the parent constructor
    // Initialize state
    // This is where you can set the initial state of the component
    this.state = {
      name: "Mounting Lifecycle Methods in Child Component",
    };
    console.log("Constructor in Child Component: Initializing state");
  }

  // 2. static getDerivedStateFromProps
  // This method is called right before rendering
  // It can be used to update the state based on props changes over time
  // It is a static method, so it does not have access to 'this'
  // It should return an object to update the state or null to indicate no change

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps in Child Component: Updating state based on props");
    return null; // Return null to indicate no state change
  }

  // 3. render
  // This method is required and should return a React element
  render() {
    console.log("Render in Child Component: Rendering the component");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <hr />
         
      </div>
    );
  }

  // 4. componentDidMount
  componentDidMount() {
    console.log("componentDidMount in Child Component: Component has been mounted");
    // You can perform side effects here, such as fetching data
  }
}

export default ChildComponentMLC

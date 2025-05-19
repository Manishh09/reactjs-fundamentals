import React, { Component } from 'react'

export class ChildComponetULC extends Component {
   constructor(props) {
    super(props);

    this.state = {
      name: "Updating Lifecycle Methods in Child Component",
    };
  }

  // Updating Lifecycle Methods
  // 1. static getDerivedStateFromProps
  // 2. shouldComponentUpdate
  // 3. render
  // 4. getSnapshotBeforeUpdate
  // 5. componentDidUpdate

  // 1. static getDerivedStateFromProps
  // This method is called right before rendering
  // It can be used to update the state based on props changes over time
  // It is a static method, so it does not have access to 'this'
  // It should return an object to update the state or null to indicate no change
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps in Child Component: Updating state based on props");
    return null; // Return null to indicate no state change
  }

  // 2. shouldComponentUpdate
  // This method is called before rendering
  // It can be used to control whether the component should update or not
  // It should return true to allow the update or false to prevent it
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate in Child Component: Deciding whether to update or not");
    return true; // Return true to allow the update
  }

  // 3. render
  // This method is required and should return a React element
  render() {
    console.log("Render in Child Component: Rendering the component");
    // You can access props and state here
    // and return the JSX to be rendered
    // You can also use this.props and this.state to access props and state
    return (
      <div>
        <h1>{this.state.name}</h1>
        <hr />
        <p>1. static getDerivedStateFromProps</p>
        <p>2. shouldComponentUpdate</p>
        <p>3. render()</p>
        <p>4. getSnapshotBeforeUpdate</p>
        <p>5. componentDidUpdate</p>
      </div>
    );
  }

  // 4. getSnapshotBeforeUpdate
  // This method is called right before the changes are reflected in the DOM
  // It can be used to capture some information (snapshot) from the DOM
  // It should return a value that will be passed to componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate in Child Component: Capturing snapshot before update");
    return null; // Return null to indicate no snapshot
  }

  // 5. componentDidUpdate
  // This method is called after the component has been updated
  // It can be used to perform side effects based on the update
  // It receives the previous props, previous state, and the snapshot value
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate in Child Component: Component has been updated");
    // You can perform side effects here, such as fetching data
    // Use the snapshot value if needed
    if (snapshot) {
      console.log("Snapshot value in Child Component:", snapshot);
    }
  }
}

export default ChildComponetULC

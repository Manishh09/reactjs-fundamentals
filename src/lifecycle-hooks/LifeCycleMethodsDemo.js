import React, { Component } from "react";

export class LifeCycleMethodsDemo extends Component {
  // Mounting Life Cycle methods
  // 1. constructor
  //2. static getDerivedStateFromProps
  //3. render
  //4. componentDidMount

  // Updating Life Cycle methods
  // 5. shouldComponentUpdate
  //6. getSnapshotBeforeUpdate
  //7. componentDidUpdate

  // Unmounting Life Cycle methods
  // 8. componentWillUnmount

  // 1. constructor
  // Common for all phases of the component lifecycle
  // The constructor is a special method that is called when an instance of the class is created
  constructor(props) {
    super(props);

    this.state = {
      name: "Lifecycle Methods Demo",
    };

    console.log("Constructor:");
  }

  // 2. static getDerivedStateFromProps
  // Common Mounting and Updating Life Cycle method
  // This method is called right before rendering, both on the initial mount and on subsequent updates
  // It allows you to update the state based on changes in props
  // It is a static method, so it does not have access to `this`
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Updating state based on props");
    return null; // Return null to indicate no state change
  }

  // 3. render
  // Common for Mounting and Updating Life Cycle methods
  // The render method is required and should return a React element
  render() {
    console.log("Render:");
    return (
      <div>
        <h1>Life Cycle Methods Demo</h1>
        <div className="life-cycle-methods">
          <p>1.Mounting Phase</p>
          <p>2.Updating Phase</p>
          <p>3.UnMounting Phase</p>
          <p>4.Error Handling Phase</p>
        </div>

        <button onClick={() => {
            this.setState({
                name: "Update the Name"
            })
        }}>Update</button>
      </div>
    );
  }

  // 4. componentDidMount
  // Triggered after the component is mounted
  // This is a good place to perform side effects like data fetching
  componentDidMount() {
    console.log("componentDidMount: Component has mounted");
  }

  // Update Life Cycle methods
  // 5. shouldComponentUpdate
  // This method is called before rendering when new props or state are being received
  // It allows you to control whether the component should update or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding whether to update");
    return true; // Return true to allow the update
  }

  // 6. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capturing snapshot before update");
    return null; // Return a value to be passed to componentDidUpdate
  }

  // 7. componentDidUpdate
  // This method is called after the component has updated
  // It is a good place to perform operations based on the previous state or props
  // It receives the previous props, previous state, and the snapshot returned from getSnapshotBeforeUpdate
  // It is called after the render method
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component has updated");
  }

  // Unmounting Life Cycle methods
  // 8. componentWillUnmount
  // This method is called just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be removed");
  }
}

export default LifeCycleMethodsDemo;

import React, { Component } from "react";

export class ChildComponentDemo extends Component {
  // 1. constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Child Component",
    };
    console.log("Child Component: Constructor");
  }

  // 2. static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("Child Component: getDerivedStateFromProps");
    return null;
  }

  // 3. render
  render() {
    console.log("Child Component: Render");
    return <div></div>;
  }

  // 4. componentDidMount()
  componentDidMount() {
    // better place to call apis
    console.log("Child Component: componentDidMount");
  }

  // 5. shouldComponentUpdate
  // controls component re-rendering
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "Child Component: shouldComponentUpdate: Deciding whether to update"
    );
    return true; // Return true to allow the update
  }

  // 5.getSnapshotBeforeUpdate
  // scroll position retrieval
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "Child Component: getSnapshotBeforeUpdate: Capturing snapshot before update"
    );
    return null; // Return a value to be passed to componentDidUpdate
  }

  // 6. componentDidUpdate
  componentDidUpdate(prevProp, prevState, snapshot) {
    // make api calls based on state comparison
    console.log(
      "Child Component: componentDidUpdate: Component has been updated"
    );
  }

  // 7. componentWillUnMount
  componentWillUnmount() {
    // clean up logic
    console.log("Child Component: componentWillUnmount");
  }
}

export default ChildComponentDemo;

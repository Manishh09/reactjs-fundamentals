import { Component } from "react";
import { ChildComponentMLC } from "./ChildComponentMLC";

export class MountingLC extends Component {
  // Mounting Lifecycle Methods

  // 1. constructor
  constructor(props) {
    super(props); // Call the parent constructor
    // Initialize state
    // This is where you can set the initial state of the component
    this.state = {
      name: "Mounting Lifecycle Methods",
    };
    console.log("Constructor: Initializing state");
  }

  // 2. static getDerivedStateFromProps
  // This method is called right before rendering
  // It can be used to update the state based on props changes over time
  // It is a static method, so it does not have access to 'this'
  // It should return an object to update the state or null to indicate no change

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Updating state based on props");
    return null; // Return null to indicate no state change
  }

  // 3. render
  // This method is required and should return a React element
  render() {
    console.log("Render: Rendering the component");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <hr />
        <p>1. constructor</p>
        <p>2. static getDerivedStateFromProps</p>
        <p>3. render()</p>
        <p>4. componentDidMount</p>
        <div className="child-component">
          <ChildComponentMLC />
        </div>
      </div>
    );
  }

  // 4. componentDidMount
  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
    // You can perform side effects here, such as fetching data
  }
}

export default MountingLC;

import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

//   clickHandler() {
//     this.setState({
//       message: "Goodbye",
//     });
//   }

   clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>Event Binding Demo</h1>
        </div>
        <h2>{this.state.message}</h2>
        {/* Using Bind (Explicit Binding Technique) */}
        {/* But re-renders the component for every update to the Sate */}
        <button onClick={this.clickHandler.bind(this)}>Click</button>

        {/* Using Arrow Function (Implicit Binding Technique) */}
        <button onClick={() => this.clickHandler()}>Click</button>

        {/* Using bind inside the constructor */}
        {/* Better performance as binding occurs once in the constructor */}
        <button onClick={this.clickHandler}>Click</button>
        
        {/* Arrow Function as a Class Property */}
        {/* This is a better way to bind the function */}
        <button onClick={this.clickHandler}>Click</button>
        
         
      </div>
    );
  }
}

export default EventBind;

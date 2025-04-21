import React from "react";
import { Component } from "react";


class Message extends Component {
    constructor(){
        super(); // invokes base class's constructor
        this.state = {
            message: 'ReactJs Fundamentals'
        }
    }
    
    changeMessage() {
        // this.state.message = "ReactJs Advanced"; // This will not work as this is a direct assignment to state
        // using setState Hook is the correct way to update state
        this.setState({ message: "ReactJs Advanced" });
    }
    render() {
        return (
        <div>
            <h1>Hello , Welcome to Learning {this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message;
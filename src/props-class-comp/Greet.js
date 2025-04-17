import React, { Component } from 'react';

/**
 * A React class component that displays a greeting message.
 * 
 * Props:
 * @property {string} name - The name of the person to greet.
 * @property {string} heroName - The hero name of the person to greet.
 * 
 * Example usage:
 * <Greet name="Clark" heroName="Superman" />
 */
class Greet extends Component {

    render() {
        return (
            <div>
                {/* Access props here */}
                <h1>Greet  {this.props.name} a.k.a {this.props.heroName}</h1>
            </div>
        )
    }
}

export default Greet;


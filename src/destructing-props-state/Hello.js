import React, { Component } from 'react'

/**
 * A React component that displays a greeting message.
 * 
 * @class Hello
 * @extends {Component}
 * 
 * @prop {string} name - The name of the person to greet.
 * @prop {string} heroName - The hero name of the person to greet.
 */
export class Hello extends Component {
  render() {
    // Destructuring props
    const { name, heroName } = this.props;
    return (
      <div>
            <h1>Hello There!</h1>
            <h1>Hello {name} a.k.a {heroName}</h1>
            <p>Welcome to the world of React</p>
      </div>
    )
  }
}

export default Hello

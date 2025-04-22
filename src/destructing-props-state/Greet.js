import React from 'react'

/**
 * Functional component that displays a greeting message.
 *
 * @param {Object} props - The props object.
 * @param {string} props.name - The name of the person to greet.
 * @param {string} props.heroName - The hero name of the person to greet.
 * @returns {JSX.Element} A JSX element containing the greeting message.
 */
const Greet =  (props) => {
    // Destructuring props
    const { name, heroName } = props;
  return (
    <div>
        <h1>Destructing Props in Functional Component</h1>
        <h1>Hello {name} a.k.a {heroName}</h1>
        <p>Welcome to the world of React</p>
    </div>
  )
}

export default Greet;

import React from "react";

/**
 * Welcome component created without JSX.
 * 
 * This component uses `React.createElement` to manually create a React element tree.
 * It renders a `div` element with an `id` of "welcomeDiv" and a `className` of "welcomeClass".
 * Inside the `div`, it renders an `h1` element with an `id` of "welcomeText" 
 * and the text "Hello, Welcome to Learning ReactJs Fundamentals..!".
 * 
 * @returns {React.ReactElement} A React element representing the Welcome component.
 */
const Welcome = () => {
    /*
    return React.createElement(
        'div',
        null,
        React.createElement(

            'h1',
            null,
            'Hello, Welcome to Learning ReactJs Fundamentals..!',
        )
    )
    */
    return React.createElement(
        'div', // parent element
        {id: 'welcomeDiv', className: 'welcomeClass'}, // an object
        // child elements
        React.createElement(

            'h1',
            {id: 'welcomeText'},
            'Hello, Welcome to Learning ReactJs Fundamentals..!',
        )
    )
}

export default Welcome;
import React from 'react';

/**
 * A functional React component that displays a greeting message.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the person to greet.
 * @param {string} props.heroName - The hero name of the person to greet.
 * @param {React.ReactNode} [props.children] - Optional children elements to render inside the component.
 * @returns {JSX.Element} A JSX element containing the greeting message and any children.
 */
const Hello = (props) => {
    // props.name = "Thor"; // This will not change the original prop value in the parent component; throws Error
    return (
        <div>
            {/* Access props here */}
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>

            {/* Access Props children here */}
            {props.children}

         </div>
    )
}

export default Hello;
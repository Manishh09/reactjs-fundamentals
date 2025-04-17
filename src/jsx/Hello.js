import React from 'react';


/**
 * A functional React component that renders a simple greeting message.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing a heading with a greeting message.
 */
const Hello = () => {
    return (
        <div>
            <h1>Hello, This is a JSX component</h1>
        </div>
    )
}

export default Hello;


// Each JSXElement is a syntactic sugar for calling React.createElement
// That is the Reason we need to import React Library to use JSX syntax
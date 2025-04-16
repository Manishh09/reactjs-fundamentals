import React from "react";

// Regular Functional Component
/*
    function Greet() {
        return (
            <div>
                <h1>Hello Devs</h1>
                <p>Welcome to ReactJs Fundamentals</p>
            </div>
        );
    }
*/

// Using ES6 Syntax
const Greet = () => {
    return (
      <div>
        <h1>Hello Devs</h1>
        <p>Welcome to ReactJs Fundamentals</p>
      </div>
    );
  };

export default Greet;

// Using Named Export Export
/*
export const Greet = () => {
  return (
    <div>
      <h1>Hello Devs</h1>
      <p>Welcome to ReactJs Fundamentals</p>
    </div>
  );
};
*/


import React, { Component } from "react";

/**
 * Component that demonstrates rendering a list of items in React.
 * 
 * This component shows how to transform an array of data into list elements
 * using JavaScript's map function, which is a common pattern in React applications
 * for rendering dynamic lists of elements.
 * 
 * @class
 * @extends {Component}
 * @example
 * <ListRenderingDemo />
 * 
 * @returns {JSX.Element} A div containing a heading, explanation text, and the rendered list items
 */
export class ListRenderingDemo extends Component {
  render() {
    const items = ["Item 1", "Item 2", "Item 3"];
    const listItems = items.map((item) => <li >{item}</li>);

    return (
      <div>
        <h2>List Rendering Demo Without Key Prop</h2>
        <p>
          This is a simple example of how to render a list of items in React
          using the map function.
        </p>

        {
          /* Using map to render a list of items */
          listItems
        }
      </div>
    );
  }
}

export default ListRenderingDemo;

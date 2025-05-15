import React, { Component } from "react";
import Product from "./Product";

/**
 * @class ProductList
 * @extends {Component}
 * @description A component that renders a list of products using a nested Product component.
 * The component maps through a predefined array of product objects and renders each one
 * by passing the product data to individual Product components.
 *
 * @example
 * <ProductList />
 *
 * @returns {JSX.Element} A div containing a heading and a list of Product components
 */
export class ProductList extends Component {
  // product list
  productList = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30",
    },
  ];
  // using map to render a list of items in React
  // use separate component for each item
  productListItems = this.productList.map((product) => (
    <Product key={product.id} product={product} />
  ));
  render() {
    return (
      <div>
        <h2>List Rendering Demo using Nested Component With <strong>Key</strong> Prop</h2>

        {this.productListItems}
      </div>
    );
  }
}

export default ProductList;

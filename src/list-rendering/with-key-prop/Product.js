import React from 'react'

function Product(props) {
    const { product } = props
    // destructuring product object
  return (
    <div>
        <h3>Product</h3>
        <p>Product Name: {product.name}</p>
        <p>Product Price: {product.price}</p>
    </div>
  )
}

export default Product

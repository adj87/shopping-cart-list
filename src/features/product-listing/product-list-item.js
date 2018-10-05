import React from "react"

export default function ProductListItem(props) {
  console.log(props)
  return (
    <div>
      <h3>{props.product.name}</h3>
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div>{props.product.description}</div>
      <div>{props.product.price}</div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

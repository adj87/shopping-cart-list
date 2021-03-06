import React from "react"

export default function ProductListItem(props) {
  const quantitiesOfItems = props.cart.reduce((itemCounter, item) => {
    itemCounter[item["id"]] = (itemCounter[item["id"]] || 0) + 1
    return itemCounter
  }, {})

  return (
    <div className="product-list-item" key={props.product.id}>
      <h3>{props.product.name}</h3>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: 50 + "%",
        }}
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
      />
      <div>{props.product.description}</div>
      <div>{props.product.price}</div>
      <div>
        <button onClick={() => props.addToCart(props.product)}>
          Add to cart(
          {quantitiesOfItems[props.product.id] &&
            quantitiesOfItems[props.product.id]}
          )
        </button>
        {quantitiesOfItems[props.product.id] > 0 && (
          <button onClick={() => props.removeFromCart(props.product)}>
            Remove from cart
          </button>
        )}
      </div>
    </div>
  )
}

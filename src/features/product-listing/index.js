import React from "react"
import ProductListItem from "./product-list-item"
import { connect } from "react-redux"

function ProductListing(props) {
  return (
    <div className="product-listing">
      {props.products.map((product, index) => (
        <ProductListItem
          key={index}
          product={product}
          addToCart={props.addToCart}
        />
      ))}
      }
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => {
    dispatch({ type: "ADD", payload: item })
  },
  removeFromCart: item => {
    dispatch({ type: "REMOVE", payload: item })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing)

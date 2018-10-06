import React from "react"

import { connect } from "react-redux"

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Item</th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {props.cart.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.name}</td>
            <button onClick={e => props.addToCart(item)}>+</button>
            <button onClick={e => props.addToCart(item)}>-</button>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => {
    dispatch({ type: "ADD", payload: item })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

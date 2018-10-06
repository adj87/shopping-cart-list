import React from "react"

import { connect } from "react-redux"

function Cart(props) {
  return (
    <div>
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
          {props.cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <button onClick={e => props.addToCart(item)}>+</button>
              <button onClick={e => props.removeFromCart(item)}>-</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => props.removeAllFromCart()}>Remove all</button>
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
  removeAllFromCart: item => {
    dispatch({ type: "REMOVE_ALL" })
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

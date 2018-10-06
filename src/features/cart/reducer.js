const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
      break
    case "REMOVE":
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)
    default:
      return state
  }
}

export default cartReducer

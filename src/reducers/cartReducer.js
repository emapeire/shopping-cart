export const cartInitialState = []

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      // If it's in cart, update quantity
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      // If it's not in cart, add it
      return [...state, { ...actionPayload, quantity: 1 }]
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      // If it's not in cart, do nothing
      if (productInCartIndex === -1) {
        return state
      }

      // If it's in cart, remove it
      const newState = structuredClone(state)
      newState.splice(productInCartIndex, 1)
      return newState
    }
    case 'CLEAR_CART': {
      return cartInitialState
    }
  }
  return state
}
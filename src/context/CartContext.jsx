/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Check if product is already in cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    // If it's in cart, update quantity
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // If it's not in cart, add it
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

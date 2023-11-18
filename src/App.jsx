import Products from './components/Products.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { IS_DEV } from './config.js'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

export default function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
      {IS_DEV && <Footer />}
    </CartProvider>
  )
}

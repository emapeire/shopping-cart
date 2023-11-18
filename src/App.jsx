import Products from './components/Products.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { IS_DEV } from './config.js'

export default function App() {
  return (
    <>
      <Header />
      <Products />
      {IS_DEV && <Footer />}
    </>
  )
}

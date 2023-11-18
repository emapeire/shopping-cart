import { useState } from 'react'
import Products from './components/Products.jsx'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header.jsx'
import useFilters from './hooks/useFilters'
import Footer from './components/Footer.jsx'
import { IS_DEV } from './config.js'

export default function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEV && <Footer filters={filters} />}
    </>
  )
}

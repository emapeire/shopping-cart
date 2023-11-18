import { products as initialProducts } from '../mocks/products.json'
import { useState } from 'react'
import { AddToCartIcon } from './Icons'
import './Products.css'
import useFilters from '../hooks/useFilters'

export default function Products() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <main className='products'>
      <ul>
        {filteredProducts.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <AddToCartIcon />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

/* eslint-disable react/prop-types */
import { AddToCartIcon } from './Icons'
import './Products.css'

export default function Products({ products }) {
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((product) => (
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

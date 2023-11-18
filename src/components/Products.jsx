import { products as initialProducts } from '../mocks/products.json'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'
import useFilters from '../hooks/useFilters'
import useCart from '../hooks/useCart'

export default function Products() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {filteredProducts.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ color: isProductInCart ? 'red' : 'green' }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'

export default function Cart() {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/2/thumbnail.jpg'
              alt='iPhone X'
            />
            <div>
              <strong>iPhone X</strong> - $899
            </div>
            <footer>
              <small>
                Quantity <strong>1</strong>
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

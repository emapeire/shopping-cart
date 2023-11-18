// import useCart from '../hooks/useCart'
// import useFilters from '../hooks/useFilters'
import './Footer.css'

export default function Footer() {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    // <footer className='footer'>
    //   {JSON.stringify(filters, null, 2)}
    //   <br />
    //   {JSON.stringify(cart, null, 2)}
    // </footer>

    <footer className='footer'>
      <h4>
        ⚛️ React Technical Test － <span>@emapeire</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  )
}

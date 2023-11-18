/* eslint-disable react/prop-types */
import './Footer.css'

export default function Footer({ filters }) {
  return (
    <footer className='footer'>
      {/* <h4>
        Technical test with React ⚛️ － <span>@emapeire</span>
      </h4>
      <h5>Shopping Cart with useContext & useReducer</h5> */}
      {JSON.stringify(filters, null, 2)}
    </footer>
  )
}

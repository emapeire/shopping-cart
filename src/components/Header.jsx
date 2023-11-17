/* eslint-disable react/prop-types */
import Filters from './Filters.jsx'

export default function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shopping Cart 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  )
}

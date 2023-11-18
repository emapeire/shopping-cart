import { useState, useId } from 'react'
import './Filters.css'
import useFilters from '../hooks/useFilters'

export default function Filters() {
  const { changeFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePrice = (event) => {
    setMinPrice(event.target.value)
    // TODO! this is not a good practice
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  const handleChangeCategory = (event) => {
    // TODO! this is not a good practice
    changeFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Min. price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangePrice}
        />
        <output htmlFor='price'>${minPrice}</output>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

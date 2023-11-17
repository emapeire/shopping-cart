/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Filters.css'

export default function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangePrice = (event) => {
    setMinPrice(event.target.value)
    // TODO! this is not a good practice
    onChange((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  const handleChangeCategory = (event) => {
    // TODO! this is not a good practice
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Min. price</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangePrice}
        />
        <output htmlFor='price'>${minPrice}</output>
      </div>
      <div>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

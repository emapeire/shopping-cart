/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

// 1. Create the context
export const FilterContext = createContext()

// 2. Create a provider
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

import React from 'react'
import { product } from '../Product'

const Price = () => {
  return (
    <h1 style={{fontWeight:"normal"}}>{product[0].price}</h1>
  )
}

export default Price
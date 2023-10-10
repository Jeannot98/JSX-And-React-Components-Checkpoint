import React from 'react'
import { product } from '../Product'

const Image = () => {
  return (
    <div>
        <img src={product[0].img} alt="" style={{width:500, borderRadius:10}}/>
    </div>
  )
}

export default Image
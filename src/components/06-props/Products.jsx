import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div>
        <ProductCard name="Recep">
            <h1>Sony</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem.</p>
        </ProductCard>
        <ProductCard>
            <h1>ıntel</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem.</p>
        </ProductCard>
        <ProductCard>
            <h1>CVD</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, exercitationem.</p>
        </ProductCard>
    </div>
  )
}

export default Products
import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = ({product, addToCart}) => {
  return (
    <div className='main-container  w-70 h-90 ' >
      <div className='product 1 flex gap-5 '>
      {product.map(singleProduct => (
        <ProductCard key={singleProduct.id} product={singleProduct} addToCart={addToCart}/>
      ))}
      </div>
    </div>
  )
}

export default Home

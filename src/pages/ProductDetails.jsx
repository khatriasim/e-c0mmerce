import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProductDetails = ({product}) => {
  const {id} = useParams()
  const currentProduct = product.find(p => p.id === parseInt(id))
  return (
    <div className='product-detail'>
      {currentProduct ? (
        <>
        <img className = "" src={currentProduct.image} alt={currentProduct.name} />

        <div className="product-info">
          <h2>{currentProduct.name}</h2>
          <p className='price'>${currentProduct.price}</p>
          <p className='description'>${currentProduct.description}</p>

        </div>
        <div className="quantity-selector">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button className=''>Add to cart</button>
        <Link to ="/products" className=''>back</Link>
        </>
      ) : (
        <p>product not found</p>
      )}
    </div>
  )
}

export default ProductDetails

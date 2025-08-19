import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div className='productcard'>
        <img className='product-image' src={product.image} alt="product.image" />
<h3>Name:{product.name}</h3>
<p>Price: ${product.price}</p>
 <div className="quantity-selector gap-9 flex">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
          <Link to={`/product/${product.id}`}>
          <button>View Details</button>
          </Link>
        <button className=''>Add to cart</button>
    </div>
    
  )
}

export default ProductCard

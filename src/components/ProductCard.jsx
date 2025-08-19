import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'




const ProductCard = ({product}) => {

const [quantity, setquantity] = useState(1)

const decreaseitem = () =>{
  if(quantity > 1)
  setquantity(quantity - 1)

}
const increaseitem = () =>{
  setquantity(quantity + 1) 
}
  return (
    <div className='productcard'>
        <img className='product-image' src={product.image} alt="product.image" />
<h3>Name:{product.name}</h3>
<p>Price: ${product.price}</p>
 <div className="quantity-selector gap-9 flex">
    <button onClick={decreaseitem}>-</button>
          <span>{quantity}</span>
          <button  onClick={increaseitem}>+</button>
        </div>
          <Link to={`/product/${product.id}`}>
          <button>View Details</button>
          </Link>
        <button className=''>Add to cart</button>
    </div>
    
  )
}

export default ProductCard

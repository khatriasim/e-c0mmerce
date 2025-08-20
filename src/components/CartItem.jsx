import React from 'react'

const CartItem = ({cartItem}) => {
  return (
    <div className='addeditems'>
      <img src={cartItem.image} alt={cartItem.name} />
      <h3>Name: {cartItem.name}</h3>
      <p>Price: ${cartItem.price}</p>
      <span>Quantity: {cartItem.quantity}</span>
    </div>
  )
}

export default CartItem

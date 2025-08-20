import React from 'react'
import CartItem from '../components/CartItem'

const Cart = ({cartItems}) => {
  return (
    <div>
      {cartItems.map(singleItem =>(
        <CartItem key = {singleItem.id} cartItem={singleItem}/>
      ))}
    </div>
  )
}

export default Cart

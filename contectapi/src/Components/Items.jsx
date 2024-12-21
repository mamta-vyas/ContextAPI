import React from 'react'
import { useCart } from '../Context/Cart'

const Items = (props) => {
    // useCart is custom hook we created it
    const cartItemsState = useCart();

  return (
    <div className='item-card'>
      <h2>Item Name -{props.name}</h2>
      <p>Price is - ${props.price}</p>
      <button onClick={() => cartItemsState.setItems([
        ...cartItemsState.items , 
        { name: props.name , price: props.price},

      ])
      }>Add To Cart</button>
    </div>
  )
}

export default Items

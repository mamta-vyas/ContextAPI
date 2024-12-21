import React from 'react';
import { useCart } from '../Context/Cart';

const Cart = () => {
    const cartItemsState = useCart();
   
    // if (!cartItemsState || !cartItemsState.items) {
    //     return <div>Loading...</div>;  // or any appropriate message
    // }

     const total = cartItemsState.items.reduce((a,b) => a+b.price , 0)
 
    return (
        <div>
            <h2>Cart</h2>
            {
                cartItemsState && cartItemsState.items.map((item)=>
                  ( <li> {item.name} - ${item.price}</li>)
                )
            }
              <h3>Total Bill:  ${total}</h3>
     
        </div>
    )
}

export default Cart;
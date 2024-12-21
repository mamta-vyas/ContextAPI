import { createContext , useContext, useState } from "react";

const CartContext = createContext(null);

// below is hook we created th
export const useCart = () => {
    const cartItemState = useContext(CartContext);
    return cartItemState;
}
export const CartProvider = (props) => {
    const [items , setItems] = useState([]);
    return (

 
        <CartContext.Provider value = {{items , setItems}}>
            {props.children}
        </CartContext.Provider>
    

    )
}
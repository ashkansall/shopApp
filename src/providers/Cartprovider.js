import { createContext, useContext, useEffect, useReducer, useState } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
    cart: [],
    total: 0
};

const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, initialState);

    return ( 
        <CartContext.Provider value={cart}>
            <CartContextDispatcher.Provider value={dispatch}>
                {children}
            </CartContextDispatcher.Provider>
        </CartContext.Provider>
     );
}
 
export default CartProvider;

// custom hook for acsessing state and dispatcher

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
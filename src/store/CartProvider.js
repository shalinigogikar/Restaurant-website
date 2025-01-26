import React,{useState} from "react";
import CartContext from "./cart-context";
const CartProvider=props=>{
const[items,updateItems]=useState([]);
    const addItemToCartHandler=item=>{
        updateItems((prevItems) => [...prevItems, item]);
    };
    const removeItemFromCartHandler=id=>{
        updateItems((prevItems) => {
            const itemToRemove = prevItems.find((item) => item.id === id);

            // If the item exists, decrement quantity or remove it if quantity is 1
            if (itemToRemove) {
              if (itemToRemove.quantity === 1) {
                // Remove the item completely if quantity is 1
                return prevItems.filter((item) => item.id !== id);
              } else {
                // Decrement the quantity if it's greater than 1
                return prevItems.map((item) =>
                  item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
              }
            }
            return prevItems;
          });
    };
    const cartContext={
    items:items,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    message:''
    };
    return(<CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
    );
};
export default CartProvider;
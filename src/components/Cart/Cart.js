import React,{useContext} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
const Cart=(props)=>{
    const cartCxt=useContext(CartContext);
    console.log(cartCxt.items);
const cartItems=(<ul className={classes['cart-items']}>
    {cartCxt.items.map((item)=>
        (<li key={item.id}>Name:{item.name} Price:{item.price} Quantity: {item.quantity}
        <button className={classes['button--alt']} onClick={() => cartCxt.removeItem(item.id)}>-</button>
        <button className={classes.button}>+</button>
        </li>))}
</ul>);
let total=0;
cartCxt.items.forEach((item)=>
    {
        const price = Number(item.price) || 0; 
    const quantity = Number(item.quantity) || 0;
       total+=price*quantity;
    });
    return(
        <Modal onClose={props.onClose}>
            <div className={classes.actions} >
            {cartItems}
            </div>
            <div className={classes.total}>
            <span>Total Amount:</span>
            <span>{total.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
        </div></Modal>
    );
};
export default Cart;
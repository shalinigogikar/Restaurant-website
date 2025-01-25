import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";
const MealItemForm=props=>{
    const cartctx=useContext(CartContext);
    const submitHandler = (event) => {
        event.preventDefault();
    const inputElement=document.getElementById('amount'+props.id);
    if (!inputElement) {
        console.error("Input element not found. Check the ID.");
        return;
    }
    const quantity = inputElement.value;
    if (+quantity < 1 || +quantity > 5) {
        alert("Please enter a valid quantity (1-5).");
        return;
    }
    cartctx.addItem({...props.item,quantity:quantity});
};
   return (
     <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" input={{
            id:'amount'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1',}}/>
        <button type="submit">+Add</button>
    </form>
   );
};
export default MealItemForm;
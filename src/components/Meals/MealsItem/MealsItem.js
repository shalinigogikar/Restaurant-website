import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm"
const MealsItem=(props)=>{
    const price=`$${props.price.toFixed(2)}`;
return(
<li>
    <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    <div>
        <MealItemForm id={props.id} item={{
                        id: props.id,
                        name: props.name,
                        price: props.price,
                    }}/>
    </div>
    </div>
</li>
);
};
export default MealsItem;
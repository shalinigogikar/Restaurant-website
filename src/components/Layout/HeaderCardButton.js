import CardIcon from "../Card/CardIcon";
import classes from "./HeaderCardButton.module.css";
const HeaderCardButton =(props)=>
{
return<button className={classes.button}>
    <span className={classes.icon}><CardIcon/></span>
    <span>your Card</span>
    <span>0</span>
</button>
}
export default HeaderCardButton;
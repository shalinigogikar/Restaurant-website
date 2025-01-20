import {Fragment} from "react";
import HeaderCardButton from "./HeaderCardButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header=(props)=>{
    return(
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="table full of food"></img>
        </div>
    </Fragment>
    );
};
export default Header;
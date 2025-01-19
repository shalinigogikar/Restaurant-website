import {Fragment} from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header=(props)=>{
    return(<Fragment>
        <Header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton/>
        </Header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="table full of food"></img>
        </div>
    </Fragment>
    );
};
export default Header;
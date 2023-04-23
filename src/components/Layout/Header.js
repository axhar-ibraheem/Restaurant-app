import React from "react";
import mealsImage from "../../images/meals.jpg";
import "./Header.css";
import CartButton from "./CartButton";

const Header = (props) => {

  
  return (
    <React.Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <CartButton click={props.showCart} />
      </header>
      <div className="mealimage">
        <img src={mealsImage} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;

import React, { useContext } from "react";
import "./MealList.css";
import MealsForm from "../MealsForm";
import CartContext from "../../../store/cart-context";

const MealList = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meal-items-list">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{`$${props.price}`}</div>
      </div>
       
      <MealsForm onAddToCart={addToCartHandler}></MealsForm>
    </li>
  );
};

export default MealList;

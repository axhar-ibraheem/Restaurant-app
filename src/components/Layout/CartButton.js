import React, { useContext } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import CartContext from "../../store/cart-context";

import "./CartButton.css";
const CartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button onClick={props.click} className="cart-button">
      <span className="cart-icon">
        <BsCartPlusFill />
      </span>
      <span className="cart-text">Your Cart</span>
      <span className="cart-number">{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;

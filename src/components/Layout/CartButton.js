import React from "react";
import { BsCartPlusFill } from "react-icons/bs";

import "./CartButton.css";
const CartButton = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.click} className="cart-button">
        <span className="cart-icon">
          <BsCartPlusFill />
        </span>
        <span className="cart-text">Your Cart</span>
        <span className="cart-number">3</span>
      </button>
    </React.Fragment>
  );
};

export default CartButton;

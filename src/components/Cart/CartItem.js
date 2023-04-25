import "./CartItem.css";
import CartContext from "../../store/cart-context";
import React, { useContext } from "react";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const removeButtonHandler = () => {
    ctx.removeItem(props.id);
  };
  const addItemHandler = () => {
    ctx.addItem({
      ...props,
      amount: 1,
    });
  };
  return (
    <li className="order-item">
      <div>
        <h3>{props.name}</h3>
        <div className="item-details">
          <span className="order-price">{`$${props.price}`}</span>
          <span className="order-amount">x{props.amount}</span>
        </div>
      </div>

      <div className="order-btn">
        <button onClick={addItemHandler} className="btn-plus">
          +
        </button>
        <button onClick={removeButtonHandler} className="btn-minus">
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;

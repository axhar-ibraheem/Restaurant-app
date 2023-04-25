import "./Cart.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import React, { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className="cart-item">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="cart-info">
        <h3>Total Amount</h3>
        <h3>{`$${cartCtx.totalAmount.toFixed(2)}`}</h3>
      </div>
      <div className="cart-btn">
        <button onClick={props.onClose} className="btn-close">
          close
        </button>
        <button className="btn-order">order</button>
      </div>
    </Modal>
  );
};

export default Cart;

import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <p>Sushi</p>
      <div className="cart-info">
        <h3>Total Amount</h3>
        <h3>35.62</h3>
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

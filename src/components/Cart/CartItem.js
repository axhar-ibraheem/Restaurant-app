import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li className="order-item">
      <h3>{props.name}</h3>
      <div className="item-details">
        <span className="order-price">{`$${props.price}`}</span>
        <span className="order-amount">x{props.amount}</span>
      </div>
    </li>
  );
};

export default CartItem;

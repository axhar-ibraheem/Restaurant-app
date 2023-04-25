import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    let updatedItems;
    let isPresent = false;
    const changedItems = state.items.map((ele) => {
      if (ele.id === action.payload.id) {
        isPresent = true;
        return {
          ...ele,
          amount: ele.amount + action.payload.amount,
        };
      }
      return ele;
    });

    if (isPresent) {
      updatedItems = [...changedItems];
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    let itemPrice;
    let itemAmount;
    let newItems = state.items.map((item) => {
      if (item.id === action.id) {
        itemPrice = item.price;
        itemAmount = item.amount;

        if (itemAmount > 1) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
      }
      return item;
    });

    if (itemAmount == 1) {
      newItems = state.items.filter((item) => item.id !== action.id);
    }
    const newTotalAmount = Math.abs(state.totalAmount - itemPrice);
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

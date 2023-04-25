import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const showCartHandler = () => {
    setDisplayCart(true);
  };

  const onCloseCartHandler = () => {
    setDisplayCart(false);
  };

  return (
    <CartProvider>
      {displayCart && <Cart onClose={onCloseCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

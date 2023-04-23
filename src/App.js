import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const showCartHandler = () => {
    setDisplayCart(true);
  };

  const onCloseCartHandler = () => {
    setDisplayCart(false);
  };

  return (
    <React.Fragment>
      {displayCart && <Cart onClose={onCloseCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;

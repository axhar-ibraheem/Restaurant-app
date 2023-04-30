import "./MealsForm.css";
import React, { useRef } from "react";

const MealsForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +inputRef.current.value;

    props.onAddToCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler} className="meals-form">
      <div className="input">
        <label className="meals-label" htmlFor="amount">
          amount
        </label>
        <input
          ref={inputRef}
          className="meals-input"
          type="number"
          id="amount"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>
      <button type="submit" className="meals-btn">
        + Add
      </button>
    </form>
  );
};

export default MealsForm;

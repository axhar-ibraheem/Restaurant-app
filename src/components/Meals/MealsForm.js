import "./MealsForm.css";

const MealsForm = () => {
  return (
    <form className="meals-form">
      <div className="input">
        <label className="meals-label" htmlFor="amount">
          amount
        </label>
        <input
          className="meals-input"
          type="number"
          id="amount"
          min="1"
          max="5"
        />
      </div>

      <button className="meals-btn">+ Add</button>
    </form>
  );
};

export default MealsForm;

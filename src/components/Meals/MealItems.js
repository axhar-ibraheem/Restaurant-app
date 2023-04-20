import React from "react";
import "./MealItems.css";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealItems = () => {
  const mealItemsList = DUMMY_MEALS.map((item) => (
    <li className="meal-items-list" key={item.id}>
      <div>
        <h3>{item.name}</h3>
        <div className="description">{item.description}</div>
        <div className="price">{`$${item.price}`}</div>
      </div>
      <div></div>
    </li>
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealItemsList}</ul>
      </Card>
    </section>
  );
};

export default MealItems;

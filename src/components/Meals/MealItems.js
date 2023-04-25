import React from "react";
import "./MealItems.css";
import Card from "../UI/Card";
import MealList from "./MealItem/MealList";

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
    <MealList
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
    />
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

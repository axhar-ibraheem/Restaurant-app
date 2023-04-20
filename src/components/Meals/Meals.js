
import RestuarantSummary from "./RestuarantSummary";
import MealItems from "./MealItems";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <RestuarantSummary/> 
      <MealItems/> 
    </React.Fragment>
  );
};


export default Meals;
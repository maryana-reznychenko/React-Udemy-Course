import React from "react";
import { useParams } from "react-router-dom";
const Meal = () => {
  const { foodName, drinkName } = useParams();
  const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
  const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
  return (
    <div>
      <h1>
        This is a meal: {foodName} and {drinkName}
      </h1>
      <img src={foodUrl} alt={foodName} />
      <img src={drinkUrl} alt={drinkName} />
    </div>
  );
};

export default Meal;

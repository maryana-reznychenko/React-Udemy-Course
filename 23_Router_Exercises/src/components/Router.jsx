import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList.jsx";
import DogDetails from "./DogDetails.jsx";
import data from "./data.js";

const Router = () => {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={data.dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={data.dogs} />} />
      <Route path="/dogs/:name/*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
};

export default Router;

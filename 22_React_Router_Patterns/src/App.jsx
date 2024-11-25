import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodSearch from "./components/FoodSearch";
import Food from "./components/Food";
import Meal from "./components/Meal";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodSearch />} />
        <Route path="/food/:name" element={<Food />} />
        <Route path="/food/:foodName/drink/:drinkName" element={<Meal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

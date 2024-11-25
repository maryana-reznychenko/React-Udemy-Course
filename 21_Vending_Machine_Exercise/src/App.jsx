import "./App.css";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import VendingMachine from "./components/VendingMachine";
import Chips from "./components/Chips";
import Sardines from "./components/Sardines";
import Soda from "./components/Soda";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<VendingMachine />}></Route>
        <Route path="/chips" element={<Chips />}></Route>
        <Route path="/sardines" element={<Sardines />}></Route>
        <Route path="/soda" element={<Soda />}></Route>
      </Routes>
    </div>
  );
}

export default App;

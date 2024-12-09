import Navbar from "./components/Navbar.jsx";

import data from "./components/data.js";
import Router from "./components/Router.jsx";
import "bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dogs={data.dogs} />
      <div className="container">
        <Router />
      </div>
    </div>
  );
}

export default App;

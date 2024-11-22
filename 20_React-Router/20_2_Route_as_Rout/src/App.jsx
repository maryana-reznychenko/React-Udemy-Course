import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Dog from "./components/Dog";
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Hater = () => <h1>I ABSOLUTELY HATE DOGS</h1>;

function App() {
  return (
    <div>
      <h3>Link component: </h3>
      <nav>
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dog">Dog</Link>
      </nav>
      <h3>a href, couse the reloading of the page: </h3>
      <nav>
        <a href="/">About</a>
        <a href="/contact">Contact</a>
        <a href="/dog">Dog</a>
      </nav>
      <h3>NavLink component: </h3>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          to="/dog"
        >
          Dog
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*sending props to the child component:*/}
        <Route path="/dog" element={<Dog name="Muffins" />} />
        <Route path="/dog/hater" element={<Hater />} />
      </Routes>
    </div>
  );
}

export default App;

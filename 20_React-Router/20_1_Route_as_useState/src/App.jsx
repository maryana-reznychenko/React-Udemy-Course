import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Dog from "./components/Dog";
import { useState } from "react";

function App() {
  const [Page, setPage] = useState("about");

  function renderPage() {
    if (Page === "about") return <About />;
    else if (Page === "dog") return <Dog />;
    else if (Page === "contact") return <Contact />;
  }

  return (
    <div>
      <nav>
        <a onClick={() => setPage("about")}>About</a>

        <a onClick={() => setPage("dog")}>Dog</a>

        <a onClick={() => setPage("contact")}>Contact</a>
      </nav>
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;

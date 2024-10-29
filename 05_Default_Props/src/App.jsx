import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <h2>Default Props. Hello.jsx</h2>
      {/*here vi sanding data to Hello component*/}
      <Hello to="Ringo" from="Paul" bangs={4} />
      <Hello to="George" />
      <hr />
    </div>
  );
}

export default App;

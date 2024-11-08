import "./App.css";
import BrockenButton from "./components/BrockenButton";
import Button from "./components/Button";
import Clicker from "./components/Clicker";

function App() {
  return (
    <div>
      <h2>Event in JSX file</h2>
      <Button />
      <hr />
      <BrockenButton />
      <hr />
      <Clicker />
      <hr />
    </div>
  );
}

export default App;

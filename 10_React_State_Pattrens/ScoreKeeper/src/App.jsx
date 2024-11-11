import "./App.css";
import IconList from "./components/IconList";
import ScoreKeeper from "./components/ScoreKeeper";

function App() {
  return (
    <div>
      <h1>React State Patterns:</h1>
      <h2>Update state based off of existing state:</h2>
      <ScoreKeeper />
      <br />
      <hr />
      <h2>State updates for mutable data structure:</h2>
      <IconList />
      <br />
      <hr />
      <h2>Best practices to modeling state and designing components:</h2>

      <br />
      <hr />
    </div>
  );
}

export default App;

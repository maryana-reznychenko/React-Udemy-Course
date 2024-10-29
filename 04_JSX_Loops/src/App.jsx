import "./App.css";
import Friend from "./components/Friend";

function App() {
  return (
    <div>
      <h2>Looping in JSX file</h2>
      <Friend name="Elton" hobbies={["Piano", "Singing", "Dansing"]} />
      <hr />

      <Friend name="Frida" hobbies={["Drawing", "Painting"]} />
      <hr />
    </div>
  );
}

export default App;

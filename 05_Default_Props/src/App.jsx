import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <h2>Default Props. Hello.jsx</h2>
      {/*here vi sanding data to Hello component*/}
      <Hello
        to="Ringo"
        from="Paul"
        bangs={4}
        data={[1, 2, 3, 4, 5]}
        img={"https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"}
      />
      <Hello to="George" />
      <Hello to="George" />
      <hr />
    </div>
  );
}

export default App;

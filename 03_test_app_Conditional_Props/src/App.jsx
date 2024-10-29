import "./App.css";
import Hello from "./components/Hello";
import NumPicker from "./components/NumPicker";
import SlotMachine from "./components/SlotMachine";

function App() {
  return (
    <div>
      <h2>Testing Conditional Rendering. NumPicker.jsx</h2>
      <NumPicker />
      <hr />

      <h2>Testing props in React. Hello.jsx</h2>
      {/*here vi sanding data to Hello component*/}
      <Hello
        to="Ringo"
        from="Paul"
        bangs={4}
        img="https://images.unsplash.com/photo-1729731322001-40b726d476ad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        num={3}
        data={[1, 2, 3, 4, 5]}
        isFunny
      />
      <Hello to="Cher" from="Sonny" bangs={10} />
      <hr />

      <h2>Testing props in React. SlotMachine.jsx</h2>
      <SlotMachine s1="🍇" s2="🍇" s3="🍇" />
      <br />
      <SlotMachine s1="🍊" s2="🍇" s3="🍊" />
    </div>
  );
}

export default App;

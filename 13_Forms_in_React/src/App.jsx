import "bootstrap";
import "./App.css";

import Form from "./components/Form.jsx";
import MultipleForm from "./components/MultipleForm.jsx";
import ShoppingList from "./components/shopping_list/ShoppingList.jsx";

function App() {
  return (
    <div className="App">
      <Form />
      <br />
      <hr />
      <MultipleForm />
      <br />
      <hr />
      <ShoppingList />
    </div>
  );
}

export default App;

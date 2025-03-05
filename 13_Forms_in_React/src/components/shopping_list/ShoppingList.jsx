//The example of backword dataflow to a parent
//using callback functions

import { useState } from "react";

import ShoppingListForm from "./ShoppingListForm";
const ShoppingList = () => {
  const [items, setItems] = useState([
    { name: "Milk", qty: "2 gallons" },
    { name: "Bread", qty: "2 loaves" },
  ]);

  function addItem(item) {
    setItems((prevItems) => [...prevItems, item]); //-> take all old items (...prevItems), put them in a new [], and set that to be a value of items
  }

  function renderItems() {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>
        The example of backword dataflow to a parent by using callback functions
      </h1>
      <br />
      {renderItems()}
      <ShoppingListForm addItem={addItem} />
    </div>
  );
};

export default ShoppingList;

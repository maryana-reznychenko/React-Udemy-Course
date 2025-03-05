import { useState } from "react";

const ShoppingListForm = ({ addItem }) => {
  const [item, setItem] = useState({
    name: "",
    qty: "",
  });

  //This function is responsible for updating the state (item) when the user types into an input field.
  function handleChange(e) {
    //1. setItem updates the state based on the previous state (prevItem).
    setItem((prevItem) => ({
      //2. The Spread Operator (...prevItem) Keeps Previous Values
      ...prevItem,
      //3. e.target Represents the Input Field
      //e.target.name → The name attribute of the input ("name" or "qty")
      //e.target.value → The current value typed into the input
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    addItem(item); //pass state value into the parent
    setItem({ name: "", qty: "" });
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="itemName">Name:</label>
      <input
        type="text"
        id="itemName"
        name="name"
        value={item.name}
        onChange={handleChange}
      />
      <label htmlFor="itemQty">Quantity:</label>
      <input
        type="text"
        id="itemQty"
        name="qty"
        value={item.qty}
        onChange={handleChange}
      />
      <button type="submit">Add Item!</button>
    </form>
  );
};

export default ShoppingListForm;

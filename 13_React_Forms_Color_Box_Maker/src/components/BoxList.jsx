//Here we rendering <NewBoxForm> and passing down the method that affects the state.
//We send it to the child <NewBoxForm>

import { useState } from "react";

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  //This function passes down to a child
  function create(newBox) {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]); //-> take all old items (...prevItems), put them in a new [], and set that to be a value of items
  }

  function remove(id) {
    setBoxes(boxes.filter((box) => box.id !== id));
  }

  const boxesList = boxes.map((box) => (
    <Box
      key={box.id}
      width={box.width}
      height={box.height}
      color={box.color}
      removeBox={() => remove(box.id)}
    />
  ));
  return (
    <div>
      <h1>Color Box Maker Thingy</h1>
      <NewBoxForm createBox={create} />
      {boxesList}
    </div>
  );
};

export default BoxList;

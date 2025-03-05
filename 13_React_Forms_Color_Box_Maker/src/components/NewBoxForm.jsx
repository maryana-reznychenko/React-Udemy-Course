import { useState } from "react";
import { v4 as uuid } from "uuid"; // Import UUID for unique keys

const NewBoxForm = ({ createBox }) => {
  const [boxData, setBoxData] = useState({
    height: "",
    width: "",
    color: "",
  });

  function handleChange(evt) {
    setBoxData({ ...boxData, [evt.target.name]: evt.target.value });
  }

  //When form is submited, handleSubmit will call the method createBox from the parent
  function handleSubmit(evt) {
    evt.preventDefault();
    const newBox = {
      ...boxData,
      id: uuid(),
    };

    createBox(newBox); // here is callback that passing submited data back to the parent BoxList
    setBoxData({ height: "", width: "", color: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          id="height"
          name="height"
          value={boxData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="width">Width: </label>
        <input
          type="text"
          id="width"
          name="width"
          value={boxData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="color">Color: </label>
        <input
          type="text"
          id="color"
          name="color"
          value={boxData.color}
          onChange={handleChange}
        />
      </div>

      <button type="submit" onSubmit={handleSubmit}>
        Add New Box
      </button>
    </form>
  );
};

export default NewBoxForm;

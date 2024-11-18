//- - - - - - - - - - - - - - - - - - - - - - -
//STATE UPDATING for a mutable data structure:
//- - - - - - - - - - - - - - - - - - - - - - -

import { useState } from "react";

const IconList = () => {
  const options = [
    "angry",
    "anchor",
    "archive",
    "at",
    "archway",
    "baby",
    "bell",
    "bolt",
    "car",
    "city",
    "cloud",
  ];

  const [icon, setIcon] = useState(["bone", "city"]);

  function addIcon() {
    let idx = Math.floor(Math.random() * options.length);
    let newIcon = options[idx];
    setIcon([...icon, newIcon]);
  }
  const icons = icon.map((i, index) => (
    <i key={index} className={`fas fa-${i}`} />
  ));

  return (
    <div>
      <h1>Icons: {icons}</h1>
      <button onClick={addIcon}>Add a New Icon</button>
    </div>
  );
};

export default IconList;

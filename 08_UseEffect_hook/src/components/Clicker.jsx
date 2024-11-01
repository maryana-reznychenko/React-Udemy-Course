import React, { useState, useEffect } from "react";

const Clicker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Something Change");
    document.title = `You clicked ${count} times`; //a message appeare in the window tab.
  });
  return (
    <div>
      <h1>Button is clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
};

export default Clicker;

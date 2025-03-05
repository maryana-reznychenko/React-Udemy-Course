//This way works a form with a single input

import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");

  function handleChange(evt) {
    setUserName(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault(); //to prevent default refreshing of the page
    alert(`You typed ${userName}`);
    setUserName("");
  }

  return (
    <div>
      <h1>Form Demo with single input</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          User Name:{" "}
          <input
            type="text"
            id="userName"
            // name="userName"
            value={userName}
            onChange={handleChange}
            placeholder="Type your name"
          />
        </label>{" "}
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Form;

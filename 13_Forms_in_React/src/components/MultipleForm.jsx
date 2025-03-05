//This way works a form with a multiple inputs

import { useState } from "react";

const MultipleForm = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(evt) {
    setUserData({ ...userData, [evt.target.id]: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault(); //to prevent default refreshing of the page
    alert(`You typed: ${userData.userName}`);
    setUserData({ userName: "", email: "", password: "" });
  }

  return (
    <div>
      <h1>Form w/ Multiple Inputs</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          User Name:{" "}
          <input
            type="text"
            id="userName"
            // name="userName" //name= is to use in handleChange [evt.target.name]
            value={userData.userName}
            onChange={handleChange}
            placeholder="Type your name"
          />{" "}
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            // name="email"
            value={userData.email}
            placeholder="email@com"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            // name="password"
            value={userData.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default MultipleForm;

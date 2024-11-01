import { useState } from "react";

const SimpleFormHook = () => {
  const [email, setEmail] = useState("");
  //e = event
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h1>The value is:{email}</h1>
      <input type="text" value={email} onChange={handleChange}></input>
      <button onClick={() => setEmail("")}>Submit</button>
    </div>
  );
};

export default SimpleFormHook;

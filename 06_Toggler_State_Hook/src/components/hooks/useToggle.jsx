//1. call useState
//2. return piece of state AND a function to toggle it

import { useState } from "react";

const useToggle = (initialVal = false) => {
  //call useState, 'reserve piece of state'
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;

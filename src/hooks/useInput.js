import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return [input, inputHandler];
}

export default useInput;

import React from "react";
import useToggleItems from "./useToggleItems";

function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div>
      <h1>Current State: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;

import React, { useReducer } from "react";
import { counterReducer, initialState } from "./reducer/counterReducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="container">
      <h1>useReducer Counter</h1>
      <p>Count: {state.count}</p>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </div>
  );
};

export default App;

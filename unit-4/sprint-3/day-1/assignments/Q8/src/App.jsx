import React, { useReducer } from "react";
import { visibilityReducer, initialState } from "./reducer/visibilityReducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div className="container">
      <h1>Toggle Visibility App</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>

      {state.isVisible && <p className="message">Hello, World!</p>}
    </div>
  );
};

export default App;

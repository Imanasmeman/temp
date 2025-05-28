import React, { useReducer } from "react";
import { themeReducer, initialState } from "./themeReducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div className={`app-container ${state.theme}`}>
      <h1>Current Theme: {state.theme}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;

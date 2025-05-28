import React, { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch({ type: "submit" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="container">
      <h1>useReducer Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <div className="output">
        {state.isSubmitted ? (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        ) : (
          <div>No details found</div>
        )}
      </div>
    </div>
  );
}

export default App;

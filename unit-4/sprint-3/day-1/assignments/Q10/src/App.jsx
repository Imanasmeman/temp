import React, { useReducer, useState } from "react";
import { collegeReducer, initialState } from "./reducer/collegeReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(collegeReducer, initialState);
  const [error, setError] = useState(null);

  const handleChange = (e, type = "UPDATE_FIELD", fieldGroup = null) => {
    try {
      dispatch({
        type,
        payload: {
          field: e.target.name,
          value: e.target.value
        }
      });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCourses = (e) => {
    const courses = e.target.value.split(",").map((course) => course.trim());
    dispatch({ type: "UPDATE_COURSES", payload: courses });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="form-box">
      <h1>College Form</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input name="name" placeholder="College Name" value={state.name} onChange={handleChange} />
        <input name="establishment_year" placeholder="Establishment Year" value={state.establishment_year} onChange={handleChange} />

        <h3>Address</h3>
        <input name="building" placeholder="Building" value={state.address.building} onChange={(e) => handleChange(e, "UPDATE_NESTED_FIELD")} />
        <input name="street" placeholder="Street" value={state.address.street} onChange={(e) => handleChange(e, "UPDATE_NESTED_FIELD")} />
        <input name="state" placeholder="State" value={state.address.state} onChange={(e) => handleChange(e, "UPDATE_NESTED_FIELD")} />

        <h4>City</h4>
        <input name="name" placeholder="City Name" value={state.address.city.name} onChange={(e) => handleChange(e, "UPDATE_CITY_FIELD")} />

        <h5>Locality</h5>
        <input name="pinCode" placeholder="Pincode" value={state.address.city.locality.pinCode} onChange={(e) => handleChange(e, "UPDATE_LOCALITY_FIELD")} />
        <input name="landmark" placeholder="Landmark" value={state.address.city.locality.landmark} onChange={(e) => handleChange(e, "UPDATE_LOCALITY_FIELD")} />

        <h4>Coordinates</h4>
        <input name="latitude" placeholder="Latitude" value={state.address.coordinates.latitude} onChange={(e) => handleChange(e, "UPDATE_COORDINATES")} />
        <input name="longitude" placeholder="Longitude" value={state.address.coordinates.longitude} onChange={(e) => handleChange(e, "UPDATE_COORDINATES")} />

        <h4>Courses Offered</h4>
        <input placeholder="Courses (comma separated)" value={state.courses_offered.join(", ")} onChange={handleCourses} />

        <div className="buttons">
          <button onClick={handleReset}>Reset</button>
        </div>

        {error && <p className="error">Error: {error}</p>}
      </form>

      <div className="output">
        <h3>Submitted College Data:</h3>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
  };

  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button onClick={handleClick} style={buttonStyle}>
        Color: {color.charAt(0).toUpperCase() + color.slice(1)}
      </button>
    </div>
  );
}

export default App;

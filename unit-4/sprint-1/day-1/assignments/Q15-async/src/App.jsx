import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("Home");

  
  const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
        <button onClick={() => handleNavigation("Home")} style={navButtonStyle}>
          Home
        </button>
        <button onClick={() => handleNavigation("About")} style={navButtonStyle}>
          About
        </button>
        <button onClick={() => handleNavigation("Contact")} style={navButtonStyle}>
          Contact
        </button>
      </nav>
      <div style={pageStyle}>
        {activePage === "Home" && <h1>Welcome to Home</h1>}
        {activePage === "About" && <h1>About Us</h1>}
        {activePage === "Contact" && <h1>Contact Us</h1>}
      </div>
    </div>
  );
}

const navButtonStyle = {
  margin: "5px",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#555",
  color: "white",
  borderRadius: "5px",
};
const pageStyle = {
  padding: "20px",
  marginTop: "20px",
  fontSize: "20px",
};

export default App;

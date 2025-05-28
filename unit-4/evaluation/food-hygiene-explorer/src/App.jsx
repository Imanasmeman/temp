import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import BusinessDetails from "./pages/BusinessDetails";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/bookmarks">Bookmarks</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/business/:fhrsId" element={<BusinessDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

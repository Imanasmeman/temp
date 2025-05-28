import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetail from "./pages/PostDetail";

const App = () => {
  return(
    <div className="app">
     <Routes>
  <Route path="/" element={<PostsList />} />
  <Route path="/post/:id" element={<PostDetail />} />
</Routes>
    </div>
  )
};
export default App;


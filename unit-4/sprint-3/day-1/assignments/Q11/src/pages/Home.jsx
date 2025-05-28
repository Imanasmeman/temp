import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/search">Search Countries</Link>
    </div>
  );
}

export default Home;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

function Users() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetails() {
  const { id } = useParams(); 
  const user = users.find(u => u.id === id);

  return (
    <div>
      {user ? (
        <h2>Details of {user.name}</h2>
      ) : (
        <h2>User not found</h2>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

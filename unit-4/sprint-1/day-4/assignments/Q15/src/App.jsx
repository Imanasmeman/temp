import React, { useEffect, useState } from 'react';
import axios from 'axios';

const firebaseURL = 'https://userreact-593de-default-rtdb.firebaseio.com/users'

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');

  // Fetch users from Firebase
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${firebaseURL}.json`);
      const data = response.data;
      const formatted = data
        ? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
      setUsers(formatted);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const validateEmail = (email) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email format');
      return;
    }

    try {
      if (editId) {
        await axios.patch(`${firebaseURL}/${editId}.json`, formData);
      } else {
        await axios.post(`${firebaseURL}.json`, formData);
      }
      setFormData({ name: '', email: '' });
      setEditId(null);
      setError('');
      fetchUsers();
    } catch (err) {
      setError('Submission failed');
    }
  };

  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user.id);
    setError('');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${firebaseURL}/${id}.json`);
      fetchUsers();
    } catch {
      setError('Failed to delete user');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>User Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button type="submit">{editId ? 'Update' : 'Add'} User</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}){' '}
            <button onClick={() => handleEdit(user)}>Edit</button>{' '}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

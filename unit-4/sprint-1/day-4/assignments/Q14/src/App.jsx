import { useState } from 'react'
import React from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = React.useState([]);
  const [error, setError] = React.useState(null); // State for error handling

  const fetchData = () => {
    axios
      .get("https://your-firebase-db.firebaseio.com/tasks.json") // Use axios.get for clarity
      .then((response) => {
        // Firebase returns data in an object format, we need to convert it to an array
        const fetchedTasks = [];
        for (const key in response.data) {
          fetchedTasks.push({ id: key, name: response.data[key].name });
        }
        setTasks(fetchedTasks); // Set tasks with parsed data
      })
      .catch((error) => {
        console.log("Error fetching tasks:", error);
        setError("Error fetching tasks. Please try again later.");
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id || index}>{task.name}</li> 
        ))}
      </ul>
    </div>
  );
}

function App() {
  

  return (
    <>
      <TaskList/>
    </>
  )
}

export default App

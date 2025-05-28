import React, { useState, useEffect } from 'react';
import { firestore } from './firebase-config'; // Assume correct config here.

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('tasks').onSnapshot(snapshot => {
      const updatedTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(updatedTasks);
    });
    return () => unsubscribe();
  }, []); 

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

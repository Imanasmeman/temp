import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setTasks, selectSortedTasks } from '../store'; 

const InboxPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectSortedTasks);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        dispatch(setTasks(response.data.todos));
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Inbox</h1>

      {tasks.length === 0 ? (
        <p style={styles.loading}>Loading tasks...</p>
      ) : (
        <div style={styles.taskList}>
          {tasks.map((task) => (
            <div key={task.id} style={styles.taskCard}>
              <h3 style={styles.todoTitle}>{task.todo}</h3>
              <p style={styles.urgency}>Urgency: {task.urgency}</p>
              <p style={styles.status}>
                Status:{' '}
                <span style={{ color: task.completed ? 'green' : 'orange' }}>
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, sans-serif',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  loading: {
    fontSize: '1.2rem',
    color: '#666',
  },
  taskList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1rem',
  },
  taskCard: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '1rem',
    backgroundColor: '#fafafa',
    boxShadow: '0 2px 5px rgba(0,0,0,0.06)',
    transition: 'transform 0.2s ease',
  },
  todoTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#222',
  },
  urgency: {
    marginTop: '0.5rem',
    color: '#444',
  },
  status: {
    marginTop: '0.3rem',
    fontWeight: '500',
  },
};

export default InboxPage;


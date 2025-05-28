import React, { useState, useEffect } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Counter value: ${count}`);
  }, [count]);

  return (
    <div style={styles.container}>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <div style={styles.buttonGroup}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={styles.button}>Decrement</button>
        <button onClick={() => setCount(0)} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default CounterApp;

import React, { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  const intervalId = useRef(null);

  const startTimer = () => {
    // If an interval already exists, clear it before starting a new one
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId.current); // Stop the timer when time reaches 0
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    // Stop the timer when the stop button is clicked
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null; // Reset the intervalId
    }
  };

  const resetTimer = () => {
    // Stop the timer and reset time to the initial value
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
    setTime(10); // Reset the time
  };

  return (
    <div>
      <h1>Time Left: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Timer />
    </>
  );
}

export default App;

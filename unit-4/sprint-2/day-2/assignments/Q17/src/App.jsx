import React, { useState, useEffect } from "react";

function StateTracker() {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(`State updated: ${state}`);
  }, [state]); 
  const updateState = () => {
    const randomNumber = Math.floor(Math.random() * 100); 
    setState(randomNumber);
  };

  return (
    <div>
      <h1>Current State: {state}</h1>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}


function App() {

  return (
    <>
     <StateTracker/>
    </>
  )
}

export default App

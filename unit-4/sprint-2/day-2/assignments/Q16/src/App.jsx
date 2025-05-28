import React, { useState, useRef, useEffect } from "react";

function ClickTracker() {
  const clickCountRef = useRef(0);

  const handleClick = () => {
    clickCountRef.current += 1;
    
    console.log(`Button clicked ${clickCountRef.current} times`);
  };

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

function App() {

  return (
    <>
       <ClickTracker/>
    </>
  )
}

export default App

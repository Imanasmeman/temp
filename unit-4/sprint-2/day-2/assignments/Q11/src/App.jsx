import React, { useState, useEffect } from 'react';

function ToggleComponent() {
  useEffect(() => {
    // Log message when component mounts
    console.log("Component Mounted");

    // Cleanup function logs message when component unmounts
    return () => {
      console.log("Component Unmounted");
    };
  }, []); // Empty dependency array ensures this runs only once (on mount and unmount)

  return <h1>Component is Visible</h1>;
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Component Visibility
      </button>

      {isVisible && <ToggleComponent />}
    </div>
  );
}

export default App;

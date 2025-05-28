import React, { useRef } from 'react';

function FocusInput() {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Use the ref to focus the input element
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me on button click" />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}



function App() {
 

  return (
    <>
     <FocusInput/>
    </>
  )
}

export default App

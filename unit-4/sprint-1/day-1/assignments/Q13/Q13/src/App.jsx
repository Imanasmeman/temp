import { useState } from "react";

function ReactDOMComponent() {
  const [title, setTitle] = useState("React Virtual DOM Title");
  const [updateCount, setUpdateCount] = useState(0);

  function updateTitle() {
    setTitle("Updated Title - React");
    setUpdateCount(updateCount + 1);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>DOM Updates: {updateCount}</p>
      <button onClick={updateTitle}>Change Title (React)</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>React Virtual DOM vs Vanilla DOM</h2>
      <ReactDOMComponent />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import store from "./store";
import { increment, decrement } from "./action";

function Counter() {
  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().count);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Counter App</h1>
      <p>Count: {JSON.stringify(count)}</p>
      <button onClick={() => store.dispatch(increment())}>Increment</button>
      <button onClick={() => store.dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;

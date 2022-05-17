import React, { useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      Class Comp - Counter value is
      <button onClick={decrement}>Decrement</button>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <br />
      <input type={flag ? "password" : "text"} />
      <button onClick={() => setFlag(!flag)}>{flag ? "SHOW" : "HIDE"}</button>
    </div>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount } from "./actions";

function Increment() {
  const count = useSelector((state) => state.increment.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  return (
    <div>
      <h2>Increment Component</h2>
      <button onClick={handleIncrement}>+5</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Increment;
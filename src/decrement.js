import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount } from "./actions";

function Decrement() {
  const count = useSelector((state) => state.decrement.count);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  return (
    <div>
      <h2>Decrement Component</h2>
      <button onClick={handleDecrement}>-5</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Decrement;
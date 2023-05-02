import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment by 5</button>
    </div>
  );
}

export default Counter;
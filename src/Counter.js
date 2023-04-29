import React from "react";
import { connect, useSelector } from "react-redux";

const Counter = ({ counterReducer, increment, decrement }) => {
  const name = useSelector((state) => state.user.name);
  //console.log(name.user.name);
  return (
    <div>
      <h3>{name}</h3>
      <h1>Counter: {counterReducer.counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counterReducer: state.counterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
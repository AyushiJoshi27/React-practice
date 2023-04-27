import React from "react";
import { connect } from "react-redux";

const Counter = ({ counterReducer, increment, decrement }) => {
  return (
    <div>
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
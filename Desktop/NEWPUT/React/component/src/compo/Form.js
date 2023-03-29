/*
import React, {useState} from "react";

export default function Form(props) {

    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <h3>You clicked the button {count} times</h3>
            <button type="button" onClick={() => setCount(count + 1)}>Convertor</button>
        </div>
    );
}
*/
import React from "react";

class Count extends React.Component {
    state = [];
  
    handleClick = index => {
      this.setState(state => {
         const newState = [...state]; //keep state immutable
         !newState[index] && (newState[index] = 0)
         newState[index]++
  
         return newState
      });
    };
  
    render() {
      return (
        <div>
          {[1,2,3].map((value, index) => <button className="block" onClick={() => this.handleClick(index)}>
            <div className="counter">{this.state[index]}</div>
          </button>)}
        </div>
      );
    }
  }

export default Count;
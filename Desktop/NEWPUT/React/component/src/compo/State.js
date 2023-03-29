import React from 'react';
//class StateOne extends React.Component {
class StateBlock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

//export default StateOne;
export default StateBlock;
import React, { Component } from 'react'

class Counter extends Component {

  //2. on updating the data
  componentDidUpdate(previousProps, previousState) {
    //console.log(previousProps.number)
    //console.log(this.props.number)
    if (previousProps.number !== this.props.number) {
      console.log("component updated");
    }
  }

  render() {
    return (
      <div>
        {/*<h1>Hello, button is clicked {this.state.count} times.</h1>*/}
        {/*To recieve number of count here*/}
        <h1>Hello {this.props.number}</h1>
      </div>
    )
  }
}

export default Counter;
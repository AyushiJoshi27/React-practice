import React from "react";

class LoginSuccess extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hello: "Ayushi"}; 
  }

  render() {
    return(
      <>
        <h1>welcome, The user is logged in.</h1>
      </>
    )
  }
}

export default LoginSuccess;
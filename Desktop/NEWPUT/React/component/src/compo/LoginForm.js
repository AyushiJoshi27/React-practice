import React from "react";

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hello: "Ayushi"}; 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Target: " + event.target.username.value)
    console.log("password: " + event.target.password.value)
  }

  render() {  
    return (  
      <>  
        <h3>Hello {this.state.hello}. This is login form for router practice.</h3>
        <form className="form-wrap">
          <h1>Login Form</h1>
          <div className="inner-wrap">
            <div className="username">
              <div className="name-head">
                <label htmlFor="username">Username: </label>
              </div>
              <input type="text" name='username' placeholder='Your username here' required/>
            </div>
            <div className="password">  
              <div className="password-head">
                <label htmlFor="password">Password: </label>
              </div>
              <input type="text" name='password' placeholder='Password' required/>
            </div>
          </div>
          <p className="error-message"></p>
          <div className="submit-wrap">
            <input onSubmit={this.handleSubmit} type="submit" value="Submit" />
          </div>
        </form>
      </>
    )
  }
}

export default LoginForm;
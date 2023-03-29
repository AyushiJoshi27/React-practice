import { withRouter } from 'react-router-dom';
import React from "react";

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '' 
    }; 
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    var obj = {
      name: "Ayushi",
      password: "Alpha@123"
    }

    if (obj.name === this.state.username && obj.password ===  this.state.password) {
      this.props.history.push({
        pathname: '/link',
        state: {username: this.state.username}
      })
    } else {
      this.setState({ error: "Invalid username or password" });
    }
  };

  render() {  
    return (  
      <>
        <form onSubmit={this.handleSubmit} className="form-wrap">
          <h1>Login Form</h1>
          <div className="inner-wrap">
            <div className="username">
              <div className="name-head">
                <label htmlFor="username">Username: </label>
              </div>
              <input type="text" name='username' placeholder='Your username here' value={this.state.username} onChange={this.handleUsernameChange} required/>
            </div>
            <div className="password">  
              <div className="password-head">
                <label htmlFor="password">Password: </label>
              </div>
              <input type="password" name='password' placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange} required/>
            </div>
          </div>
          <p className="error-message"></p>
          <div className="submit-wrap">
              <button type="submit">Submit</button>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </>
    )
  }
}

export default withRouter(LogIn);
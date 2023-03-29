import { Link } from "react-router-dom";
import React from "react";
//import LoginSuccess from "./LoginSuccess";
//import LoginSuccess from "./pages/LoginSuccess";

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hello: "Ayushi"}; 
  }

  handleSubmit = (event) => {

    var obj = {
      name: "Ayushi",
      password: "Alpha@123"
    }
    
    event.preventDefault();
    //console.log(obj.name === event.target.username.value)
    //console.log(obj.password ===  event.target.password.value)

    if (obj.name === event.target.username.value && obj.password ===  event.target.password.value) {
      //console.log("Target: " + event.target.username.value)
      //console.log("password: " + event.target.password.value)
      console.log('Heyy');

      return (console.log('JHe'));
    }
  };

  render() {  
    return (  
      <>  
        <h1>Hello {this.state.hello}</h1>
        <form onSubmit={this.handleSubmit} className="form-wrap">
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
              <button type="submit">Submit
                <Link to='/login'></Link>
              </button>
          </div>
        </form>
      </>
    )
  }
}

export default LogIn;
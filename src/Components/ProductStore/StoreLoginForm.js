import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate} from 'react-router-dom';

function StoreLoginForm(props) {
  let [yourName, setyourName] = useState("");
  let [yourPassword, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleNameChange(e) {
    setyourName(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  } 

  function handleSubmit(e) {
    const validUser = { name: 'Ayushi', pswrd: 'Alpha@123' };
    e.preventDefault();
    let userName = true;
    let userPassword = true;
    if (yourName === validUser.name && yourPassword === validUser.pswrd) {
      userName = true;
      userPassword = true;
      navigate('/layout/StoreData');
      localStorage.setItem('login', yourName);
    }

    if (yourName !== validUser.name) {
      userName = false
    } else if (yourPassword !== validUser.pswrd) {
      userPassword = false;
    }

    if (userName === false) {
      setError("Please enter username")
    } else if (userPassword === false) {
      setError('Please enter password');
    }
  }

  return (
    <>
    <h3 style={{textAlign: "center"}}>Store Login</h3>
    <form onSubmit={handleSubmit} className="form-wrap">
      <h1>Login Form</h1>
      <div className="inner-wrap">
        <div className="username">
          <div className="name-head">
            <label htmlFor="user  name">Username: </label>
          </div>
          <input type="text" name='username' placeholder='Username' value={yourName} onChange={handleNameChange} required />
        </div>
        <div className="password">
          <div className="password-head">
            <label htmlFor="password">Password: </label>
          </div>
          <input type="password" name='password' placeholder='Password' value={yourPassword} onChange={handlePasswordChange} required />
        </div>
      </div>
      {error && <p className="error-message"> {error} </p>}
      <div className="submit-wrap">
        <button type="submit">Submit</button>
      </div>
    </form>
    <Outlet/>
    </>
  );
}

export default StoreLoginForm;
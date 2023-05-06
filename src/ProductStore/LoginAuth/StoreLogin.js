import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../store';
import axios from 'axios';

export default function StoreAuthenticator() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [userpassword, setUserpassword] = useState("");
  const [error, setError] = useState("");
  //const [users, setUsers] = useState("");

  /*
  useEffect(() => {
    fetch(`${baseUrl}users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  */
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login page")

    /*
    const a = {
      "username: ": username,
      "userpassword: ": userpassword
    }
    if (users) {
      console.log(users)
      const obj = users.find(data => data.username === a.username && data.password === a.password)
      console.log("obj: ", obj);
      console.log(users.find(data => data.username && data.password))
    }
    */

    axios({
      url: `${baseUrl}auth/login`,
      method: "POST",
      data: {
        username: username,
        password: userpassword,
      }
    }).then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("token"));
      navigate('/store');
    }).catch((err) => {
      console.log(err.response.data);
      setError(err.response.data)
    })
  }

  return (
    <>
      <h3 style={{textAlign: "center"}}>Store Login</h3>
      <form className="form-wrap" onClick={loginHandler}>
        <div className='login-input'>
          <div className="username">
            <div className="name-head">
              <label htmlFor="user  name">Username: </label>
            </div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='your username' /><br /><br />
          </div>
          <div className="password">
            <div className="password-head">
              <label htmlFor="password">Password: </label>
            </div>
            <input type='password' onChange={(e) => setUserpassword(e.target.value)} placeholder='your userpassword' /><br /><br />
          </div>
          {error && <p className="error-message"> {error} </p>}
          <div className="submit-wrap">
            <button>Login</button>
          </div>
        </div>
      </form>
      <Outlet />
    </>
  )
};

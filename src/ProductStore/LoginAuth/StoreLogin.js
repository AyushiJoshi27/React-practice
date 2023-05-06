import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../store';
import axios from 'axios';

export default function StoreAuthenticator() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [userpassword, setUserpassword] = useState("");
  const [error, setError] = useState("");

  //localStorage.removeItem('token');

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login page")

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

      setTimeout(() => {
        navigate('/');
      }, 10000)
    }).catch((err) => {
      setError(err.response.data)
    })
  };

  return (
    <>
      <h3 style={{textAlign: "center"}}>Store Login</h3>
      <form className="form-wrap" >
        <div className='login-input'>
          <div className="username">
            <div className="name-head">
              <label htmlFor="user  name">Username: </label>
            </div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='your username' />
          </div>
          <div className="password">
            <div className="password-head">
              <label htmlFor="password">Password: </label>
            </div>
            <input type='password' onChange={(e) => setUserpassword(e.target.value)} placeholder='your userpassword' />
          </div>
          {error && <p className="error-message"> {error} </p>}
          <div className="submit-wrap">
            <button onClick={loginHandler}>Login</button>
          </div>
        </div>
      </form>
      <Outlet />
    </>
  )
};

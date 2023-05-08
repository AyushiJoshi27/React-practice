import React, { useState, useRef } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../store';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { tokenAction } from '../../actions/GetDataAction';

export default function StoreAuthenticator() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const token = localStorage.getItem('token');

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login page")
    const username = nameRef.current.value;
    const userpassword = passwordRef.current.value;

    axios({
      url: `${baseUrl}auth/login`,
      method: "POST",
      data: {
        username: username,
        password: userpassword,
      }
    }).then(res => {
      //console.log(res);
      sessionStorage.setItem('token', res.data.token); 
      //localStorage.setItem("token", res.data.token); 
      //console.log(localStorage.getItem("token"));
      navigate('/store');

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
            <input type="text" ref={nameRef} placeholder='your username' />
          </div>
          <div className="password">
            <div className="password-head">
              <label htmlFor="password">Password: </label>
            </div>
            <input type="text" ref={passwordRef} placeholder='your userpassword' />
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
import React from 'react';
import { useParams } from 'react-router-dom';

function SuccessLogin() {
  let {yourName } = useParams();

  return (
    <div className='success-message'>
      <h1>WELCOME!!</h1>
      <p>{ yourName } is logged in</p>
      <h1>THANK YOU!!!</h1>
    </div>
  );
}

export default SuccessLogin;
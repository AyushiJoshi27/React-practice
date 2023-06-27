import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function FormHook() {
  const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data, errors);
  }
  return (
    <div className='formContainer'>
      <h2>Registration form</h2>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username:</label>
            <input type='text' name='username' placeholder='username' {...register('username')} />
          </div>
          <div className='field'>
            <label>Email:</label>
            <input type="text" name='Email' placeholder='Email' {...register('email')} />
          </div>
          <div className='field'>
            <label>Password:</label>
            <input type='password' name='Password' placeholder='Password' {...register('password')} />
          </div>
          <div className='submitBtnWrapper'><button className='submitButton'>Submit</button></div>
        </div>
      </form>
    </div>
  )
}

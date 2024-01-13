import React, { useEffect, useState } from 'react'
import Button from './Button'

const Login = (props) => {
  const [isDisabled, setIsdisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(username, password);
  }
  const usernameChaneHandler = (e) => {
    setUsername(e.target.value);
  }
  const paswordChaneHandler = (e) => {
    setPassword(e.target.value);
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (username.length != 0 || password.length != 0) {
        setIsdisabled(false);
      }
      else{
        setIsdisabled(true);
      }
    }, 2000);
    return () => {
      clearTimeout(timerId);
    }
  }, [username, password]);
  return (
    <div>
      <form onSubmit={submitHandler} className='form-control w-50 d-block mx-auto my-5 p-5'>
        <div>
          <label className='w-50 my-2' htmlFor="username">نام کاربری</label>
          <input className='w-75 my-2 form-control' type="text" name="username" id="username" placeholder='نام کاربری' onChange={usernameChaneHandler} />
          <label className='w-50 my-2' htmlFor="password">کلمه عبور</label>
          <input className='w-75 my-2 form-control' type="password" name="password" id="password" placeholder='کلمه عبور' onChange={paswordChaneHandler} />
        </div>
        <div>
          <Button isDisabled = {isDisabled}/>
        </div>
      </form>
    </div>
  )
}

export default Login
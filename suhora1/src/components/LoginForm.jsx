// Login Form Component (loginForm.jsx)
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice'; // AuthSlice actions

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials)); // Dispatch login action
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={credentials.email} onChange={handleChange} />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

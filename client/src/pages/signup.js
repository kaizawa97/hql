import { Button } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    axios.post('http://localhost:5000/api/v1/signup', {
      user: {
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      }
    },
      { withCredentials: true }
    ).then(res => {
      if(res.data.status === 'success') {
        props.handleSuccessfulAuthentication(res.data);
      }
      console.log("registration res", res);
    }).catch(err => {
      console.log("registration err", err);
    });
    e.preventDefault();
  }

  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data);
    props.history.push("/posts");
  }
  
  return (
    <div>
      <h1>Signup</h1>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirm}
          name="passwordConfirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <Button type="submit">Signup</Button>
      </form>
    </div>
  );
}
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    const logindata = {
      email: email,
      password: password
    }
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('http://localhost:5000/api/v1/login', logindata, {withCredentials: true})
    .then(res => {
      // ログイン成功
      // if(res.data.status === 'success') {
      //   props.handleSuccessfulAuthentication(res.data);
      // }
      console.log("registration res", res); //開発時にログを表示
    }).catch(err => {
      // ログイン失敗
      console.log("registration err", err);
    });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Signin</h1>
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
        <Button type="submit">Signin</Button>
      </form>
    </div>
  );
}
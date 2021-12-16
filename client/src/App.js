import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import { Home } from './pages/home';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import { Posts } from './pages/posts';
import { Notfound } from './pages/error'
// import { Profile } from './pages/profile';

export const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In");
  const [user, setUser] = useState({});
  const handleLogin = (data) => {
    setLoggedInStatus("Logged In");
    setUser(data.user);
  };

  useEffect(() => {
    checkLoginStatus();
  });

  const checkLoginStatus = () => {
    axios.get('http://localhost:5000/api/v1/logged_in', { withCredentials: true })
      .then(res => {
        if (res.data.logged_in && loggedInStatus === "Not Logged In") {
          setLoggedInStatus("Logged In");
          setUser(res.data.user);
        } else if (!res.data.logged_in && loggedInStatus === "Logged In") {
          setLoggedInStatus("Not Logged In");
          setUser({});
        }
        console.log("logged in res", res);
      }).catch(err => {
        console.log("logged in err", err);
      })
  }

  const handleLogout = () => {
    setLoggedInStatus("Not Logged In");
    setUser({});
    axios.delete('http://localhost:5000/api/v1/logout', { withCredentials: true })
      .then(res => {
        console.log("logout res", res);
      }).catch(err => {
        console.log("logout err", err);
      })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home handleLogin={handleLogin} loggedInStatus={loggedInStatus} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' celement={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
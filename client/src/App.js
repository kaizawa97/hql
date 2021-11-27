import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import { Posts } from './pages/posts';
import { Notfound } from './pages/error'
// import { Profile } from './pages/profile';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='*' celement={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
}
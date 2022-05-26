import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './home';
import { Signin } from './signin';
import { Signup } from './signup';
// import { SignupEmail } from './signupemail';
// import { VerifyEmail } from './verifyemail';
// import { DetailSignup } from './detailsignup';
// import { ForgotPassword } from './fogotpassword';
// import { Posts } from './posts';
import { Profile } from './profile';
import { Chat } from './chat';
import { NotSigned } from './notsigned';
import { Notfound } from './error';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NotSigned />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/signup' element={<Signup />} />
        <Route path='/signup/email' element={<SignupEmail />} />
        <Route path='/signup/verifyemail' element={<VerifyEmail />} />
        <Route path='/signup/detail' element={<DetailSignup />} />
        <Route path='/signin/forgotpassword' element={<ForgotPassword />} />
        <Route path='/posts' element={<Posts />} /> */}
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

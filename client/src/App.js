import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import { Posts } from './pages/posts';
import { Notfound } from './pages/error'
// import { Profile } from './pages/profile';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/posts' component={Posts} />
        <Route path='*' component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}
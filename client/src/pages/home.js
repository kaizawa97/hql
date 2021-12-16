import React from 'react';
import { Navbarcomponent } from '../components/navbar';
import { Footercomponent } from '../components/footer';

import { Signup } from './signup';

export const Home = (props) => {
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data);
    props.history.push("/posts");
  }

  return (
    <div>
      <Navbarcomponent />
      <div>
        <p>Login Status: {props.loggedInStatus}</p>
        <Signup handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
        {/* <Login /> */}
        {/* <p>Hello World</p> */}
      </div>
      {/* <Footercomponent /> */}
    </div>
    )
}

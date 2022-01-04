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
      </div>
      {/* <Footercomponent /> */}
    </div>
    )
}

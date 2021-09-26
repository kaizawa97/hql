import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { Button, Navbar } from 'react-bulma-components';

const Navbarcomponent = () => {
  return (
    <BrowserRouter>
      <Navbar>
        <Navbar.Brand className="">
          <Navbar.Item to="/home">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="35" />
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Container className="" align="right">
          <Navbar.Item>
            <Button className="button is-info is-radiusless" to="/home">
              Sign up
            </Button>
            <Button className="button is-light" to="/">
              Log in
            </Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar>
    </BrowserRouter>
  );
};

export default Navbarcomponent;
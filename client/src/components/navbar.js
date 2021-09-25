import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

const Navbar = () => {
  return (
    <BrowserRouter>
      <Button color="primary" className="navbar-item">
        <Link to="/">Home</Link>
      </Button>
    </BrowserRouter>
  );
};

export default Navbar;
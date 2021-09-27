import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

export const Navbarcomponent = () => {
  return (
    <BrowserRouter>
      <div className="container is-max-desktop">
        <div className="py-3 navbar-brand" >
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="120" height="120" />
          </a>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info is-expanded is-block">
                  <Link to="/signup" style={{ color: 'white' }}>Sign Up</Link>
                </a>
                <a className="button is-light">
                  <Link to="/login" style={{ color: 'black'  }}>Login</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter >
  );
};

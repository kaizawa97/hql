import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export const Footercomponent = () => {
  return (
    <BrowserRouter>
      <footer className="footer has-background-primary">
        <div className="container is-max-desktop">
          <div className="has-text-white content has-text-centered">
            <h1> HQL </h1>
            <div className="column">
              <h6>About us</h6>
              <p className="has-text-center">
                このサービスは招待制です。
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div class="has-background-success has-text-white bottom">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column">
              <p>Kai Mitsuzawa.</p>
            </div>
            <div class="column has-text-right">
              <i class="fa fa-facebook-square"></i>
              <i class="fa fa-twitter-square"></i>
              <i class="fa fa-google-plus-square"></i>
              <i class="fa fa-linkedin-square"></i>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
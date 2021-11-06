import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { SingleNavbarcomponent } from '../components/singlenavbar';
import { SingleFootercomponent } from '../components/singlefooter';

import { useSignin } from '../hooks/useSignin';

export const Signin = () => {
  const {
    email,
    password,
    error,
    loading,
    user,
    blanksetEmail,
    blanksetPassword
  } = useSignin();

  return (
    <section className="hero is-white is-fullheight">
      <SingleNavbarcomponent />
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-black">Sign in</h3>

            <form action="" className="box">
              <div className="field">
                <div className="control">
                  <input className="input is-large" type="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input className="input is-large" type="password" placeholder="Your Password" required />
                </div>
              </div>

              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button className="button is-block is-info is-large is-fullwidth">
                Login
                <i className="fa fa-sign-in" aria-hidden="true" />
              </button>
            </form>

            <p className="has-text-grey">
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
      <SingleFootercomponent />
    </section>
  );
};
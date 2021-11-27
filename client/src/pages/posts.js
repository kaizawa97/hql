import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Navbarcomponent } from '../components/navbar';

export const Posts = () => {
  return (
    <div className="container">
      <Navbarcomponent />
      <h1>Example Posts!!!!</h1>
    </div>
  );
}
import React from 'react';
import { Navbarcomponent } from '../components/navbar';
import { Footercomponent } from '../components/footer';

export const Home = () => {
  return (
    <div>
      <Navbarcomponent />
      <div>
        <p>Hello World</p>
      </div>
      <Footercomponent />
    </div>
    )
}

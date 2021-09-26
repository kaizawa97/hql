import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import { Button, Columns, Footer } from 'react-bulma-components';

const Footercomponent = () => {
  return (
    <BrowserRouter>
      <Footer>
        <Columns className="column is-8 offset-2">
          <Button className="button is-primary is-outlined is-fullwidth">
            <Link to="/">Home</Link>
          </Button>
        </Columns>
        </Footer>
    </BrowserRouter>
  );
};

export default Footercomponent;
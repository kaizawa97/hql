import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from "../image/test.JPG"

export const Navbarcomponent = () => {
  return (
    <AppBar color='transparent' position="fixed">
      <Toolbar>
        {/* <Typography component="img" sx={{ height: 32, margin: 3, ml: 40 }} src={Logo} /> */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: 3, ml: 40 }}>
          HQL
        </Typography>
        <Button color="primary" variant="contained" component={Link} to="/signin" sx={{ margin: 1 }}>
          SignIn
        </Button>
        <Button color="primary" variant="contained" component={Link} to="/signup" sx={{ mr: 40 }}>
          signup
        </Button>
      </Toolbar>
    </AppBar >
  );
}

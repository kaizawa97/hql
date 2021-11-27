import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbarcomponent = () => {
  return (
    <AppBar color="inherit" position="fixed" >
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="primary" variant="contained" component={Link} to="/signin">
          SignIn
        </Button>
        <Button color="primary" variant="contained" component={Link} to="/signin">
          signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

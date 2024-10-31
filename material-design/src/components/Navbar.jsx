import React, { Fragment } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'
import theme from '../temaConfig';

const Navbar = () => {

  const Despues = styled('div')({
    offset: theme.mixins.toolbar
  });

  return (  
    <Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">
            Hola mundo
          </Typography>
        </Toolbar>
      </AppBar>
      <Despues></Despues>
    </Fragment>
  );
}
 
export default Navbar;
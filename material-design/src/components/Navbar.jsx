import React, { Fragment } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import theme from '../temaConfig';

const Navbar = () => {
  //console.log("theme.mixins.toolbar: ", theme.mixins.toolbar);
  const Despues = styled('div')({
    //offset: ,
    marginTop: (theme.mixins.toolbar.minHeight + 10)+'px',
  });
  const ToolbarFlex = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const IconTitleContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
  });

  return (  
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary">
          <ToolbarFlex>
            <IconTitleContainer>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                HolaMundo
              </Typography>
            </IconTitleContainer>
            <Button variant="text" color="default">
              LOGIN
            </Button>
          </ToolbarFlex>
        </AppBar>
      </Box>
      <Despues></Despues>
    </Fragment>
  );
}
 
export default Navbar;
import React, { Fragment } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider  } from '@mui/material/';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Listas = () => {
  return (  
    <Fragment>
      <List component='nav'>
        <ListItem component='button'>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary='Home'/>
        </ListItem>
        <Divider/>
        <ListItem component='button'>
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText primary='Setting'/>
        </ListItem>
      </List>
    </Fragment>
  );
}
 
export default Listas;
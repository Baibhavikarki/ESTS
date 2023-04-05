import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PetsIcon from '@mui/icons-material/Pets';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

//Pages
import UserAnimals from '../../../layouts/pages/user-dashboard/Animals';
import UserDashboard from '../../../layouts/pages/user-dashboard/Dashboard';
import UserSettings from '../../../layouts/pages/user-dashboard/ChangePassword';

import { NavLink } from 'react-router-dom';
import { textAlign } from '@mui/system';

export default function UserDrawer({state, setState, toggleDrawer}) {
   
  const list = (anchor) => {
    const itemList = [{
        text: 'Dashboard',
        icon: <DashboardIcon/>,
        component: <UserDashboard/>,
        route: "/pages/user-dashboard/dashboard"
    },
    {
        text: 'Add Animals',
        icon: <PetsIcon/>,
        component: <UserAnimals/>,
        route: "/pages/user-dashboard/animals"
    },
    {
        text: 'Settings',
        icon: <SettingsIcon/>,
        component: <UserSettings/>,
        route: "/pages/user-dashboard/ChangePassword"
    },
    {
        text: 'Logout',
        icon: <LogoutIcon/>,
        route: '/pages/presentation'
    }]; 



    



    return(
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        {['ESTS Admin Dashboard'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        <Divider /> 
      <List>
        {itemList.map((item, index) => {
            const {text, icon, route} = item;
            return(
          <ListItem key={textAlign} disablePadding>
            <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <NavLink to={route}><ListItemText primary={text} /></NavLink>
            </ListItemButton>
          </ListItem>
        )})}
      </List>
      
      
    </Box>
  )};

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
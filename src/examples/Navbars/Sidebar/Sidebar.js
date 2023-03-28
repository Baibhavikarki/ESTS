import React from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import DashboardIcon from '@mui/icons-material/Dashboard';
import PetsIcon from '@mui/icons-material/Pets';

const Drawer = ({state, setState, toggleDrawer}) => {
    return (
        <MUIDrawer variant="permanent">
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemIcon>
                        {index % 2 === 0 ? <DashboardIcon /> : <PetsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </MUIDrawer>
    );
};

export default Drawer;
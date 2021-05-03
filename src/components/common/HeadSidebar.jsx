import React from 'react';
import Header from './Header';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import StoreIcon from '@material-ui/icons/Store';
import ListItemText from '@material-ui/core/ListItemText';

import {
  NavLink
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function HeadSidebar({ handleOpenSidebar, handleCloseSidebar, openSidebar }) {
  
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Header handleOpenSidebar={handleOpenSidebar} openSidebar={openSidebar}/>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openSidebar,
          [classes.drawerClose]: !openSidebar,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openSidebar,
            [classes.drawerClose]: !openSidebar,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleCloseSidebar}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button component={NavLink} to="/home" activeClassName="Mui-selected">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        
            <ListItem button component={NavLink} to="/wishlist" activeClassName="Mui-selected">
              <ListItemIcon><LibraryAddCheckIcon /></ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItem>

            <ListItem button component={NavLink} to="/market" activeClassName="Mui-selected">
              <ListItemIcon><StoreIcon /></ListItemIcon>
              <ListItemText primary="Market" />
            </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

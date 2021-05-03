import React from 'react';
import HeadSidebar from "./components/common/HeadSidebar";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './containers/Home';
import Market from './containers/Market';
import Wishlist from './containers/Wishlist';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  }
}));

export default function App() {
  
  const classes = useStyles();

  const drawerWidth = 240;

  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleOpenSidebar = () => {
      setOpenSidebar(true);
  }

  const handleCloseSidebar = () => {
      setOpenSidebar(false);
  }
  
  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
          <HeadSidebar
            openSidebar={openSidebar}
            drawerWidth={drawerWidth}
            handleOpenSidebar={handleOpenSidebar}
            handleCloseSidebar={handleCloseSidebar} />
          <Switch>
            <Route path="/market">
              <Market drawerWidth={drawerWidth} openSidebar={openSidebar}/>
            </Route>
            <Route path="/wishlist">
              <Wishlist drawerWidth={drawerWidth} openSidebar={openSidebar}/>
            </Route>
            <Route path="/home">
              <Home drawerWidth={drawerWidth} openSidebar={openSidebar}/>
            </Route>
          </Switch>
      </div>
    </React.Fragment>
  );

}

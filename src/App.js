import React from 'react';
import Home from './containers/Home';


export default function App() {
  
  const drawerWidth = 240;
  
  return (
    <React.Fragment>
      <Home drawerWidth={drawerWidth}/>
      {/* <Whishlist /> */}
    </React.Fragment>
  );

}

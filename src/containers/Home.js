import React from "react";
import HeadSidebar from "../components/common/HeadSidebar";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Catalogue from "../components/products/Catalogue";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

export default function Home({drawerWidth}) {
    
    const classes = useStyles();

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
                <HeadSidebar openSidebar={openSidebar} drawerWidth={drawerWidth} handleOpenSidebar={handleOpenSidebar} handleCloseSidebar={handleCloseSidebar} />
                <Catalogue openSidebar={openSidebar} drawerWidth={drawerWidth} brand={"nyx"} />
            </div>
        </React.Fragment>
    );
}

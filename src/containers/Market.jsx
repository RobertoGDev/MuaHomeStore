import React from "react";
import HeadSidebar from "../components/common/HeadSidebar";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Catalogue from "../components/Catalogue";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

export default function Market({drawerWidth}) {
    
    const classes = useStyles();

    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [brand, setBrand] = React.useState("");

    const handleOpenSidebar = () => {
        setOpenSidebar(true);
    }

    const handleCloseSidebar = () => {
        setOpenSidebar(false);
    }

    const handleChangeBrand = (e) => {
        let brand = e.target.value;
        setBrand(brand);
    }

    console.log(brand)

    return (
        <React.Fragment>
            <div className={classes.root}>
                <CssBaseline />
                <HeadSidebar
                    handleChangeBrand={handleChangeBrand}
                    openSidebar={openSidebar}
                    drawerWidth={drawerWidth}
                    handleOpenSidebar={handleOpenSidebar}
                    handleCloseSidebar={handleCloseSidebar} />
                <Catalogue
                    openSidebar={openSidebar}
                    drawerWidth={drawerWidth}
                    brand={brand} />
            </div>
        </React.Fragment>
    );
}

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Resume from "../components/Resume";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function Home({drawerWidth, openSidebar}) {
    
    const classes = useStyles();
    
    return (
        <main className={classes.content}>
            <Resume
                openSidebar={openSidebar}
                drawerWidth={drawerWidth}
                />
        </main>
    );
}

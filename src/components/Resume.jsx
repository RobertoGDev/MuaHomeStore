import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


export default function Resume({openSidebar, drawerWidth}) {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        circularLoader: {
            display: 'flex',
            '& > * + *': {
              marginLeft: theme.spacing(2),
            },
          },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth,
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
        resume: {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 230px)",
            justifyContent: "space-between",
            gridGap: 20
        },
    }));

    
    const classes = useStyles();
    
    return (
            <main className={clsx(classes.content, {
                [classes.contentShift]: openSidebar,
              })}>
                <div className={classes.resume}>
                    
                </div>
            </main>
        )
    }

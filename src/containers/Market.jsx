import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Catalogue from "../components/Catalogue";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(7),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export default function Market({drawerWidth, openSidebar}) {
    
    const classes = useStyles();

    const [values, setValues] = React.useState({
        brand: '',
        productType: '',
    });

    const handleChange = event => {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      };

    return (
            <main className={classes.content}>
                <form noValidate autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="brand">Firma</InputLabel>
                        <Select
                        value={values.brand}
                        onChange={handleChange}
                        inputProps={{
                            name: 'brand',
                            id: 'brand',
                        }}
                        >
                        {
                            ['nyx', 'maybelline'].map((name, index) => 
                                <MenuItem key={index} value={name}>{name}</MenuItem>
                            )
                        }
                        </Select>
                    </FormControl>
                </form>
                {
                    values.brand.length > 0 
                    && (
                    <Catalogue
                        openSidebar={openSidebar}
                        drawerWidth={drawerWidth}
                        brand={values.brand} />
                        )

                }
                
            </main>
    );
}

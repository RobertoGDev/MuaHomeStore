import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import fetchProducts from "../../api/makeupapi";
import Product from "./Product";


export default function Get({openSidebar, drawerWidth, brand}) {

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
        catalogue: {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 230px)",
            justifyContent: "space-between",
            gridGap: 20
        },
    }));

    
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    
    useEffect(function() {
        fetchProducts({brand})
        .then(products => setProducts(products))
    }, [brand])

    return (
            <main className={clsx(classes.content, {
                [classes.contentShift]: openSidebar,
              })}>
                <div className={classes.catalogue}>
                {
                    (products.length !== 0) ? (
                        products.map( ({id, image_link, product_type, name, description, price, rating, product_colors, product_link}) =>
                            <Product
                                key={id}
                                id={id} 
                                image_link={image_link} 
                                product_type={product_type} 
                                name={name} 
                                description={description} 
                                price={price} 
                                rating={rating}
                                product_colors={product_colors}
                                product_link={product_link}
                            />
                        )
                    ) :
                        <CircularProgress />
                }   
                </div>
            </main>
        )
    }

    /*  
    brand: "maybelline"
    category: null
    created_at: "2016-10-01T18:36:15.012Z"
    currency: null
    description: "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert ↵balance of shade + shimmer illuminator for natural glow. Skin goes ↵soft-lit with zero glitz.↵↵		For Best Results: Brush over all shades in palette and gently sweep over ↵cheekbones, brow bones, and temples, or anywhere light naturally touches↵ the face.↵↵		↵	↵↵                    "
    id: 495
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
    name: "Maybelline Face Studio Master Hi-Light Light Booster Bronzer"
    price: "14.99"
    price_sign: null
    product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/495.json"
    product_colors: []
    product_link: "https://well.ca/products/maybelline-face-studio-master_88837.html"
    product_type: "bronzer"
    rating: 5
    tag_list: []
    updated_at: "2017-12-23T21:08:50.624Z"
    website_link: "https://well.ca"
    */
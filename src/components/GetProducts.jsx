import React, {useState, useEffect} from 'react';
import fetchProducts from "../api/makeupapi";
import Products from "./Products";
import "../styles/Catalogue.css";

export default function GetProducts({brand = "all"} = {}) {
    
    const [products, setProducts] = useState([]);
    
    useEffect(function() {
        fetchProducts({brand})
        .then(res => setProducts(res))
    }, [brand])

    return <div className={"catalogue"}>
        {
            <Products all={products}/>
        }
        </div>
        
}
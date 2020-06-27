import React from 'react';


export default function Products({all}) {
    
    return <React.Fragment>
        {
            all.map(({id, image_link, product_type, name, description,price, rating}) => 
            <div key={id} className="card">
                <a href={id}>
                    <img alt={"image of "+name} src={image_link} title={description}></img>
                    <h3>{name}</h3>
                    🤑 {price}$
                </a> 
            </div>
            )
        }
        </React.Fragment>
        
}
import React, {useState} from "react";
import Product from "../data/Product_data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from "./Cards";
import "./products.css";
const Products = ({handleClick})=>{
    
    return(
        <section>
            {Product.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
    )
}
export default Products;

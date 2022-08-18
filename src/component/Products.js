import React from "react";
import Product from "../data/Product_data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./products.css";
const Products = ()=>{
    const renderCard = (card, index) =>{
        return(
            <div>
                <Card style={{ width: '18rem' }} key={index} className="box">
                    <Card.Img variant="top" className="img-top" src={card.img} />
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>
                            {"Rs."+card.price}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    return(
        <div className="grid">
            {Product.map(renderCard)}
        </div>
    )
}
export default Products;

import React from "react";
import Product from "../data/Product_data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ()=>{
    const renderCard = (card, index) =>{
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card.img} />
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Text>
                            {card.price}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    return(
        <div className="products">
            {Product.map(renderCard)}
        </div>
    )
}
export default Products;

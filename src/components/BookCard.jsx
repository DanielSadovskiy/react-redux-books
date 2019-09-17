import React from 'react'
import { Card, Button } from 'react-bootstrap'
const cardImage = {
    width: "100%",
    height: "30vh"
}
const cardBody = {
    width: "100%",
    heigth: "10vh"
}
export const BookCard = ({ title, author, price, image }) => {

    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="card h-100 d-flex flex-column justify-content-between">
                <img className="card-img-top " style={cardImage} src={image} alt="Card image cap"></img>
                <div style={cardBody}>
                    <div className="">
                        <h6 className="text-truncate">{title}</h6>
                        <p>{author}</p>
                    </div>
                </div>
                <div className="mb-0 mx-auto">
                    <small className="text-muted">Price: {price}</small>
                </div>
            </div>
            
        </div>

    )
};


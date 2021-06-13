import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
    //console.log(props.data, "data");
    return (
        <div className="product-card">
            <img
                src={props.data.image}
                alt=""
                className="product-image"
                style={{ width: "100%" }}
            />
            <h3>{props.data.title}</h3>
            <h4 className="price">$ {props.data.price}</h4>
            <button className="product-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;

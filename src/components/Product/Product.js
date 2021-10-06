import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);



    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="row mb-2">
            <div className="col product-img text-center">
                <img className="img-thumbnail " src={img} alt="" />
            </div>
            <div className="product-title col-md-8 m-2 pb-3 border-bottom">
                <h1> <Link to={"/product/"+key}>{name}</Link> </h1>
                <p>By: {seller} </p>
                <p >Price: {price} </p>
                <p>Only: {stock} left in stock - Order soon</p>
                {props.showAddToCart && <button className="add-to-cart-btn bg-warning" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
            </div>

        </div>
    );
};

export default Product;
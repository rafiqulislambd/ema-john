import React from 'react';

const ReviewItem = (props) => {
    
    const { name, quantity, key, price } = props.product;
    return (
        <div className="p-2 mb-4 pb-4 border-bottom">
            <h4 className="text-primary">{name}</h4>
            <p>Quantity: {quantity} </p>
            <p>Price: {price} </p>
            
            <button onClick={() => props.removeProduct(key)} className="btn btn-warning">Remove</button>
        </div>
    );
};

export default ReviewItem;
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
   
    const cart = props.cart;
    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        const product = cart[i];
        total = total + product.price  * product.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);


    return (
        <div>

            <h4>Order Summary</h4>
            <p>Total Items:<span> {cart.length}</span></p>
            <p>Product Price:<span> {total.toFixed(2)}</span></p>
            <p>Shipping Cost:<span> {shipping}</span></p>
            <p>Tax and Vat:<span> {tax}</span></p>
            <h4 className="text-danger">Total: {grandTotal} </h4>
            <br />
           {props.children}


        </div>
    );
};

export default Cart;
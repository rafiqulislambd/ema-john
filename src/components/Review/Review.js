import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        console.log("place an Order");
    }

    const removeProduct = (productKey) => {
        
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);

        const cartProducts = productkeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
       
    }, []);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt="" />
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-10 border-end">
                    <h2 className="p-2">Cart Items: {cart.length} </h2>
                    {cart.map(pd => <ReviewItem
                        removeProduct={removeProduct}
                        key={pd.key}
                        product={pd}>

                    </ReviewItem>)}

                    { thankYou }
                </div>
                <div className="col-md-2">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button onClick={handlePlaceOrder} className="btn btn-warning border border-secondary">Place an Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;
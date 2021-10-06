import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData';
import './Shop.css';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);

        addToDatabaseCart(product.key, count);
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col col-md-10 p-4 border-end">
                    {products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddProduct={handleAddProduct}
                        showAddToCart={true}>
                    </Product>)}
                </div>
                <div className="col-md-2 p-2">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn btn-warning border border-secondary">Review Order</button>
                        </Link>
                    </Cart>
                </div>

            </div>




        </div>
    );
};

export default Shop;
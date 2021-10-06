import React from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';


const ProductDetail = () => {
    
   
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div className="container">
            <h1 className="text-center p-4"> This is your Product Deatails Page</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;
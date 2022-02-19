import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/slices/productSlice';
import Product from '../Product/Product';

const Home = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.product.discover?.products)
    // console.log(products);


    useEffect(() => {
        dispatch(fetchProducts());

    }, [])
    return (
        <div>
            <h2>Products</h2>
            {
                products?.map(product => <Product
                    product={product}
                ></Product>)
            }

        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../../redux/slices/cartSlice';
import { fetchProducts } from '../../../redux/slices/productSlice';
import Product from '../Product/Product';

const Products = () => {
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(getTotals());

    }, [dispatch])



    const products = useSelector((state) => state?.products?.discover)
    console.log(products);
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

export default Products;
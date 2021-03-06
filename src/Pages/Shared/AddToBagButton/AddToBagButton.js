import { Button } from '@mui/material';
import { styled } from '@mui/system';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../../redux/slices/cartSlice';
import { getStoredCart } from '../utilities/fakeDb';



// let savedItem;

const AddToBagButton = ({ product }) => {
    console.log(product?._id);

    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [value, dispatch])


    // useEffect(() => {
    //     const cart = getStoredCart('cart');
    //     console.log(cart);

    //     setValue(cart[product?.product_id])



    //     if (cart[product?.product_id]) {

    //         setChecked(true)
    //     }
    //     else {
    //         setChecked(false)
    //     }
    // }, [value])






    const addToBagButton = (product) => {
        setChecked(true);
        dispatch(addToCart(product))

        // addToDb(id);
        setValue(value + 1);

    }

    const add = (product) => {
        dispatch(addToCart(product))
        // addToDb(id);
        setValue(value + 1)
    }

    const subtract = (product) => {
        dispatch(decreaseCart(product))
        // subtractFromDb(id);
        setValue(value - 1)
    }



    const ColorButton = styled(Button)(({ theme }) => ({
        '&:active': {
            backgroundColor: '#1b5e20',
        },
        '&:hover': {
            backgroundColor: '#1b5e20',
            color: 'white'
        },

    }));

    // savedItem = value;



    return (
        <>
            {checked ? (
                <ColorButton
                    size="small"
                    sx={{ backgroundColor: '#1b5e20', textTransform: 'none', border: '1px solid #1b5e20', fontSize: '14px', fontWeight: 'normal', height: '32px', width: '102px', color: '#FFFFFF' }}
                >
                    <button onClick={() => subtract(product)} style={{ background: '#1b5e20', border: 'none', color: '#FFFFFF', marginRight: '20px', fontSize: '14px' }}>-</button>
                    {value}
                    <button onClick={() => add(product)} style={{ background: '#1b5e20', border: 'none', color: '#FFFFFF', marginLeft: '20px', fontSize: '14px' }}>+</button>
                </ColorButton>
            ) : (
                <ColorButton
                    size="small"
                    onClick={() => addToBagButton(product)}
                    sx={{ color: '#1b5e20', textTransform: 'none', border: '1px solid #1b5e20', fontSize: '14px', fontWeight: 'normal', height: '32px', width: '102px' }}
                >
                    Add to bag
                </ColorButton>
            )}



        </>
    );
};

// export const sendValue = () => {

//     return savedItem;
// }

export default AddToBagButton;
import { Button } from '@mui/material';
import { styled } from '@mui/system';

import React, { useEffect, useState } from 'react';
// import { addToDb, getStoredCart, subtractFromDb } from '../../utilities/fakeDb';

// let savedItem;

const AddToBagButton = ({ id }) => {

    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(0);




    // useEffect(() => {
    //     const cart = getStoredCart('shopping_cart');

    //     setValue(cart[id])



    //     if (cart[id]) {

    //         setChecked(true)
    //     }
    //     else {
    //         setChecked(false)
    //     }
    // }, [value])






    const addToBagButton = (id) => {
        setChecked(true);

        // addToDb(id);
        setValue(value + 1);

    }

    const add = (id) => {

        // addToDb(id);
        setValue(value + 1)
    }

    const subtract = (id) => {

        // subtractFromDb(id);
        setValue(value - 1)
    }



    const ColorButton = styled(Button)(({ theme }) => ({
        '&:active': {
            backgroundColor: 'blue',
        },
        '&:hover': {
            backgroundColor: 'blue',
            color: 'white'
        },

    }));

    // savedItem = value;



    return (
        <>
            {checked ? (
                <ColorButton
                    size="small"
                    sx={{ backgroundColor: 'blue', textTransform: 'none', border: '1px solid blue', fontSize: '14px', fontWeight: 'normal', height: '32px', width: '102px', color: '#FFFFFF' }}
                >
                    <button onClick={() => subtract(id)} style={{ background: 'blue', border: 'none', color: '#FFFFFF', marginRight: '20px', fontSize: '14px' }}>-</button>
                    {value}
                    <button onClick={() => add(id)} style={{ background: 'blue', border: 'none', color: '#FFFFFF', marginLeft: '20px', fontSize: '14px' }}>+</button>
                </ColorButton>
            ) : (
                <ColorButton
                    size="small"
                    onClick={() => addToBagButton(id)}
                    sx={{ color: 'blue', textTransform: 'none', border: '1px solid blue', fontSize: '14px', fontWeight: 'normal', height: '32px', width: '102px' }}
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
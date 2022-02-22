import { Badge, Button, IconButton, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';


const Bag = () => {

    const { cartTotalQuantity } = useSelector(state => state.cart)

    return (
        <div>
            <Box>
                <Button sx={{ color: '#1b5e20', textTransform: 'none' }}>



                    <ShoppingBagIcon sx={{ color: '#1b5e20', width: '30px', height: '30px', marginRight: '10px' }}  >

                    </ShoppingBagIcon>
                    <Box sx={{ position: 'absolute', color: '#FFFFFF', backgroundColor: '#1b5e20', width: '25px', height: '15px', border: '1px solid #FFFFFF', borderRadius: '20px', marginTop: '14px', marginLeft: '-20px' }}>
                        <Typography sx={{ fontSize: '10px', textAlign: 'center' }}>{cartTotalQuantity}</Typography>
                    </Box>


                    <a href='/cart' style={{ textDecoration: 'none', color: '#1b5e20' }}>Cart</a>
                </Button>
            </Box>
        </div >
    );
};

export default Bag;
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getTotals } from '../../../redux/slices/cartSlice';

const Carts = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state?.cart)

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch])


    console.log(cart);
    const carts = cart.cartItems;
    // console.log(carts);

    const handleProceed = () => {
        dispatch(clearCart)
    }

    return (
        <div>
            <h2>Cart</h2>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '14px', color: '#021F3F', marginLeft: '50px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    <Grid item xs={2} sm={4} md={4} sx={{ color: '#021F3F' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Product Name</Typography>
                            {
                                // <Typography sx={{ fontSize: '14px' }}>{ }</Typography>
                                carts.map(cart => <Typography sx={{ fontSize: '14px' }}>{cart.name}</Typography>)
                            }
                        </Box>

                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Qty</Typography>
                        {
                            carts.map(cart => <Typography sx={{ fontSize: '14px' }}>{cart.cartQuantity}</Typography>)
                        }

                    </Grid>
                    <Grid item xs={2} sm={4} md={4} >
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>Amount</Typography>
                        {
                            carts.map(cart => <Typography sx={{ fontSize: '14px' }}>{cart.price * cart.cartQuantity}</Typography>)
                        }
                    </Grid>
                </Grid>
            </Box>
            <hr />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '14px', color: '#021F3F', marginLeft: '50px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    <Grid item xs={2} sm={4} md={6} sx={{ color: '#021F3F', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontSize: '14px' }}>Sub-total</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Discount</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Vat</Typography>
                        <Typography sx={{ fontSize: '14px' }}>Delivery Charge</Typography>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} sx={{ color: '#021F3F' }}>
                        <Typography sx={{ fontSize: '14px' }}>{cart.cartTotalAmount}</Typography>
                        <Typography sx={{ fontSize: '14px' }}>0</Typography>
                        {/* <Typography sx={{ fontSize: '14px' }}>{carts[0].vat_percentage}</Typography> */}
                        <Typography sx={{ fontSize: '14px' }}>0</Typography>
                    </Grid>
                </Grid>

            </Box>
            <hr />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '20px', color: '#021F3F', marginLeft: '50px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    <Grid item xs={2} sm={4} md={6} sx={{ color: '#021F3F', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontSize: '14px' }}>Total Amount</Typography>

                    </Grid>
                    <Grid item xs={2} sm={4} md={6} sx={{ color: '#021F3F' }}>
                        <Typography sx={{ fontSize: '14px' }}>{cart.cartTotalAmount}</Typography>

                    </Grid>
                </Grid>
            </Box>
            <Button onClick={() => handleProceed()}>Proceed</Button>
        </div>
    );
};

export default Carts;
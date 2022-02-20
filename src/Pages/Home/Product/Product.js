import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Card, CardMedia, Drawer, Grid, Typography } from '@mui/material';
import ProductDetails from '../ProductDetails/ProductDetails';
import AddToBagButton from '../../Shared/AddToBagButton/AddToBagButton';

const Product = ({ product }) => {
    const { product_name, product_id, product_description, unit_selling_price } = product

    const images = useSelector((state) => state.product.discover.images)


    const img = images?.find(image => image?.product_id == product_id)
    // console.log(img?.image_url);


    const [state, setState] = useState(false);


    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };





    const list = (id) => (
        <Box
            sx={{ width: 447 }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <CloseIcon sx={{ marginLeft: '401px', marginTop: '28px' }} onClick={toggleDrawer(false)}></CloseIcon>
            <Box sx={{ display: 'flex', marginTop: '85px', marginLeft: '144px' }}>

                <Typography sx={{ fontSize: '24px', fontWeight: 500, color: '#1b5e20' }}>Product Details</Typography>
            </Box>
            <Box sx={{ marginTop: '60px', marginLeft: '40px', marginRight: '40px' }}>
                <ProductDetails
                    id={product_id}
                ></ProductDetails>

            </Box>
            <Box sx={{ marginX: '40px', marginTop: '70px' }}>
                {/* <BagProduct sx={{ marginTop: '30px' }}></BagProduct> */}
                {/* <Calculate></Calculate> */}
            </Box>


        </Box >
    );
    let p = 0;



    return (

        <Fragment key={'right'}>
            <Card sx={{ width: '50%', display: 'flex', marginLeft: '25%', marginBottom: '20px', backgroundColor: '#a5d6a7' }}>


                <CardMedia
                    component="img"
                    width='25%'
                    image={img?.image_url}
                    alt={product_description}
                    sx={{ width: '25%' }}
                    onClick={toggleDrawer(true)}

                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '8px', paddingTop: '20px', marginBottom: '6px' }} onClick={toggleDrawer(true)}>
                    <Typography component="div" sx={{ fontSize: '16px', fontWeight: 500, color: '#021F3F' }} ellipsizeMode='tail' numberOfLines={1}>
                        {product_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        pcs
                    </Typography>
                    <Typography variant="body2" color="#021F3F">
                        {unit_selling_price}/-
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', marginLeft: '18px', marginTop: '0px', paddingTop: '20px' }}>
                    <Box>
                        <AddToBagButton
                            id={product_id}

                        ></AddToBagButton>
                    </Box>
                    <Box>
                        <Button size="small"><KeyboardArrowRightIcon sx={{ ml: '40px', color: '#1b5e20' }} /></Button>
                    </Box>
                </Box>

            </Card>

            <Drawer
                anchor='right'
                open={state}
            // onClose={toggleDrawer(false)}
            >
                {list(product_id)}
            </Drawer>

        </Fragment>

    );
};

export default Product;
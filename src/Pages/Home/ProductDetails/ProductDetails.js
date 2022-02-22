import { Card, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddToBagButton from '../../Shared/AddToBagButton/AddToBagButton';
import BuyNowButton from '../../Shared/BuyNowButton/BuyNowButton';

const ProductDetails = ({ id }) => {

    const [details, setDetails] = useState({});
    // console.log(details);

    useEffect(() => {
        fetch(`https://murmuring-basin-44738.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    // const img = details.images?.find(detail => detail?.product_id == id)


    return (
        <div>
            <Box sx={{ width: '100%', marginLeft: '5%', marginBottom: '20px' }}>



                <CardMedia
                    component="img"
                    width='50%'
                    image={details.img}
                    alt='image'
                    sx={{ width: '50%' }}


                />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '8px', paddingTop: '20px', marginBottom: '6px' }} >
                    <Typography component="div" sx={{ fontSize: '16px', fontWeight: 500, color: '#021F3F' }} ellipsizeMode='tail' numberOfLines={1}>
                        {details.name}
                    </Typography>
                    <Typography variant="body2" color="#021F3F">
                        {details.price}/-
                    </Typography>
                    <Typography variant="body2" color="#021F3F">
                        {details.description}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', marginLeft: '18px', marginTop: '0px', paddingTop: '20px' }}>
                    <Box>
                        <AddToBagButton
                            product={details}

                        ></AddToBagButton>
                    </Box>
                    <Box>
                        <BuyNowButton></BuyNowButton>
                    </Box>

                </Box>



            </Box>

        </div>
    );
};

export default ProductDetails;
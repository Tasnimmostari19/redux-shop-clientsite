import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const BuyNowButton = () => {

    const handleClick = () => {

    }


    const ColorButton = styled(Button)(({ theme }) => ({
        '&:active': {
            backgroundColor: '#1b5e20',
            color: 'white'
        },
        '&:hover': {
            backgroundColor: '#1b5e20',
            color: 'white'
        },

    }));

    return (
        <ColorButton
            size="small"
            onClick={handleClick}
            sx={{ textTransform: 'none', border: '1px solid #1b5e20', fontSize: '14px', fontWeight: 'normal', height: '32px', width: '102px' }}
        ><a href='/cart' style={{ textDecoration: 'none', color: '#1b5e20' }}>Buy Now</a>

        </ColorButton>
    );
};

export default BuyNowButton;
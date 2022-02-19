import { Badge, Button, IconButton, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box } from '@mui/system';

const Bag = () => {
    return (
        <div>
            <Box>
                <Button sx={{ color: '#FF6550', textTransform: 'none' }}>



                    <ShoppingBagIcon sx={{ color: '#FF6550', width: '30px', height: '30px' }}  >

                    </ShoppingBagIcon>
                    <Box sx={{ position: 'absolute', color: '#FFFFFF', backgroundColor: '#FF6550', width: '25px', height: '15px', border: '1px solid #FFFFFF', borderRadius: '20px', marginTop: '14px', marginLeft: '15px' }}>
                        <Typography sx={{ fontSize: '10px', textAlign: 'center' }}>15</Typography>
                    </Box>



                    Bag</Button>
            </Box>
        </div >
    );
};

export default Bag;
import { Box } from '@mui/system';
import React from 'react';

import { Typography } from '@mui/material';
import Bag from '../../Cart/Bag/Bag';

const Navigation = () => {
    return (
        <div>
            <Box>
                <Box>
                    <Typography>Redux Shop</Typography>
                </Box>
                <Box>
                    <Bag></Bag>
                </Box>
            </Box>

        </div>
    );
};

export default Navigation;
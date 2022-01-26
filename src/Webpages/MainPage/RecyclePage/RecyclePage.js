import React from 'react';
import Box from '@mui/material/Box';

const RecyclePage = () => {
    return (
        <Box sx={{ bgcolor: '#17463D', height: '100vh', width: '100vw', border: '1px solid white', display: 'grid', placeItems: 'center' }} >
            <Box>
                <img src='images/ecology.gif' alt='gif'/>
            </Box>
            <Box>
                <h1 className='title'>Here's Why You Should Recycle</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                </p>
            </Box>
        </Box>
    )
}

export default RecyclePage;

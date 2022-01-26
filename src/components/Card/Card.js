import React from 'react';
import Box from '@mui/material/Box';

const Card = ({title, description}) => {
    return (
        <Box sx={{ 
            bgcolor: '#1F6255', margin: '0', display: 'grid', placeItems: 'center',
            width: 'calc(15rem + 3vw)', height: '100%'
            // height: 'calc(25rem + 10vh)'
        }} >
            <Box sx={{
                width: '10rem', height: '10rem',
                display: 'grid', placeItems:'center', background: 'url(https://i0.wp.com/i.ya-webdesign.com/images/girl-avatar-png-19.png)',
                backgroundSize: 'cover'
            }}>
                {/* <img className='avatar-photo'src='https://i0.wp.com/i.ya-webdesign.com/images/girl-avatar-png-19.png' alt=''/> */}
            </Box>
            <Box sx={{ paddingLeft: '20px', paddingRight: '20px', textAlign: 'center'}}>
                <h2>{title}</h2>
                <p>{description}</p>
            </Box>
            
        </Box>
    )
}

export default Card;

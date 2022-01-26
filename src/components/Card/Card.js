import React from 'react';
import Box from '@mui/material/Box';

const Card = ({title, description}) => {
    return (
        <Box sx={{ bgcolor: 'black', height: '20rem', width: '15rem', margin: '0', display: 'grid', placeItems: 'center' }} >
            <img className='avatar-photo'src='' alt=''/>
            <h2>{title}</h2>
            <p>{description}</p>
        </Box>
    )
}

export default Card;

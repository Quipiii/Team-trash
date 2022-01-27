import React from 'react';
import Box from '@mui/material/Box';
import '../../App.css';

const Card = ({title}) => {
    return (
        <div>
            <Box  sx={{ 
                bgcolor: '#1F6255', margin: '0', display: 'grid', placeItems: 'center',
                width: 'calc(16rem + 3vw)', height: 'calc(20rem + 10vh)'
            }} >
                <Box sx={{
                    width: '100%', height: '100%',
                    display: 'grid', placeItems:'center', background: 'url(https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146) no-repeat',
                    backgroundSize: 'cover', backgroundPosition: 'center'
                }}/> 
            </Box>
            <h2 style={{paddingTop: '20px'}}>{title}</h2>
        </div>
    )
}

export default Card;

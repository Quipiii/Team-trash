import React from 'react';
import Box from '@mui/material/Box';

const RecyclePage = () => {
    return (
        <section>
            <h2 className='numbered-heading'>Yay To Recycling</h2>
            <Box className='inner' sx={{ 
                height: '50vh', width: '100%', border: '1px solid white',
                display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '20px'
            }} >
                <Box className='recycle-text' sx={{ height: '100', width:'90%', margin: 'auto'}}>
                    <p>
                        <p className='title-text'>Here's Why You Should Recycle</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. 
                    </p>
                </Box>
                <div className='recycle-picture'>
                    <div className='wrapper'>
                        <div className='image-wrapper'>
                            <img className='gif' src='images/ecology.gif' alt='gif'/>
                        </div>
                    </div>   
                </div>
            </Box>
        </section>
    )
}

export default RecyclePage;

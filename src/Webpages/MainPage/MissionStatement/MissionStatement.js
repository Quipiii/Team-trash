import { Box, Grid } from '@mui/material';
import React from 'react';

const MissionStatement = () => {
    return (
            <section id='mission-statement' >
                <h2 className='numbered-heading'>Our Mission Statement</h2>
                <Box sx={{display: 'flex', gap: '10rem',margin: 'auto'}}>
                        <Box className='mission-statement-title-text'>
                                <h2 className='title-text'>We’re an organization working to .... Lorem </h2>
                                <h2 className='title-text'>ipsum dolor sit amet, consectetur adipiscing elit </h2>
                                <h2 className='title-text'>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</h2>
                            </Box>

                    <Grid container spacing={10} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Grid item xs={6} sx={{display: 'grid', placeItems: 'center'}}>
                            <Box>
                                <h3 className='sub-title-text'>Our Vision</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{display: 'grid', placeItems: 'center'}}>
                            <Box>
                                <h3 className='sub-title-text'>Our Mision</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </section>
    )
}

export default MissionStatement;

import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../../App.css';
 /* .title-text - classname for title for descriptive sections */
/*.findbutton - classname for the find out how button */
/*.whyrecycle-container - classname for parent div */
const WhyRecycle = () => {
    return (
        <div className='whyrecycle-container' >
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <h2 className='title-text'>Recycling Keeps Trash Out of The Landfill & Prevents Pollution</h2>
            <Button className='findbutton' variant='contained' >FIND OUT HOW</Button>
            </Grid>
            <Grid item xs={6}>
                2
            </Grid>
            <Grid item xs={6}>
                3
            </Grid>
            <Grid item xs={6}>
                <h2 className='title-text'>Recycling Supports Public Health & Creates Jobs</h2>
                <Button className='findbutton' variant='contained' >FIND OUT HOW</Button>
            </Grid>
            <Grid item xs={6}>
                <h2 className='title-text'>Recycling Conserves Energy & Saves Resources</h2>
                <Button className='findbutton' variant='contained' >FIND OUT HOW</Button>
            </Grid>
            <Grid item xs={6}>
                6
            </Grid>


        </Grid>
        </div>
        
    )
}

export default WhyRecycle;

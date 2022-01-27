import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Masonry from '@mui/lab/Masonry';
import '../../App.css';


//  .title-text - classname for title for descriptive sections
//  .find-button - classname for the find out how button
//  .whyrecycle-container - classname for parent div 
//  .recycle-image - classname used for image of recycling bin
//  .sub-text -classname used for subtext within each grid
const heights =[150, 30, 90, 70, 110, 150, 130, 80]

const WhyRecycle = () => {
    return (
        <div className='whyrecycle-container' >
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <h2 className='title-text'><p>Recycling Keeps Trash Out of The Landfill & Prevents Pollution</p></h2>
                <div className='subtext'>
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                </div>
            <Button className='find-button' variant='contained' >FIND OUT HOW</Button>
            </Grid>
            <Grid item xs={6}>
                <div className='recycle-image'>
                    2
                </div>
            </Grid>
            <Grid item xs={6}>
                3
            </Grid>
            <Grid item xs={6}>
                <h2 className='title-text'>Recycling Supports Public Health & Creates Jobs</h2>
                    <div className='subtext'>
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                    </div>
                <Button className='find-button' variant='contained' >FIND OUT HOW</Button>
            </Grid>
            <Grid item xs={6}>
                <h2 className='title-text'>Recycling Conserves Energy & Saves Resources</h2>
                    <div className='subtext'>
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                    </div>
                <Button className='find-button' variant='contained' >FIND OUT HOW</Button>
            </Grid>
            <Grid item xs={6}>
                6
            </Grid>
            


        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '50vh' }} >

            <Grid item xs={4}>
                <h2 className='title-text'>HOW CAN YOU RECYCLE?</h2>
            </Grid>
            
        </Grid>
        
        
        </div>
        
    )
}

export default WhyRecycle;

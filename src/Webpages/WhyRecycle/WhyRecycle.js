import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
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
            <div className='title-text'><p>Recycling Keeps Trash Out of The Landfill & Prevents Pollution</p></div>
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
                <div className='title-text'>HOW CAN YOU RECYCLE?</div>
            </Grid>
            <Box sx={{ width: 500, minHeight: 200 }}>words
            <Masonry columns={4} spacing={1}>
            
            </Masonry>
            </Box>
            
        </Grid>

        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }} >
            <Grid item xs={6}>
            <div className='title-text'>HEAR WHAT OTHERS HAVE TO SAY
            </div>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid container wrap="nowrap" spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
          <Typography>hello there</Typography>
          </Grid>
          </Grid> 
          <Grid container wrap="nowrap" spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>hello there</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>hello there</Typography>
          </Grid>
        </Grid> 
        
        </Grid>
        </Grid>
            
        

        
        </div>
        
    )
}

export default WhyRecycle;

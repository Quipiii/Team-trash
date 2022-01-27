import React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import '../../App.css';


//  .title-text - classname for title for descriptive sections
//  .find-button - classname for the find out how button
//  .whyrecycle-container - classname for parent div 
//  .recycle-image - classname used for image of recycling bin
//  .sub-text -classname used for subtext within each grid

const heights =[150, 30, 90, 70, 110, 150, 130, 80]

const WhyRecycle = () => {
    return (

        <main id='content'>
            <section className='whyrecycle' >
                <section className='recycle-benefits'>
                    <h2 className='numbered-heading'>Benefits of recycling</h2>
                    <Grid container spacing={20}>
                        <Grid item xs={6}>
                            <h2 className='title-text'>Recycling Keeps Trash Out of The Landfill & Prevents Pollution</h2>
                            <div className='subtext'>
                                <p>Did you know recycling can cut carbon dioxide and other greenhouse gas emissions that lead to climate change? If we were to fully recycle the 20 million tons of household recyclables that are thrown in the trash, we would reduce U.S. greenhouse gas emissions by 96 million metric tons of carbon dioxide equivalent. We’d achieve the same effect as taking more than 20 million cars off U.S. highways – all from recycling!</p> 
                            </div>
                        <Button className='find-button image-border' variant='outlined' sx={{zIndex: 5}}>FIND OUT HOW</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <div className='recycle-image'>
                            <Box sx={{ width: '400px', height: '400px', background: '#1F625578', margin: 'auto'}}></Box>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                        <Box sx={{ width: '400px', height: '400px', background: '#1F625578', margin: 'auto'}}></Box>
                        </Grid>
                        <Grid item xs={6}>
                            <h2 className='title-text'>Recycling Supports Public Health & Creates Jobs</h2>
                                <div className='subtext'>
                                    <p>Recycling not only benefits the environment, but also the economy. If all of the 37.4 million tons of recyclable materials generated in U.S. households were collected curbside and delivered back to economic use, it would generate 370,000 new full-time equivalent jobs. These “green jobs” can involve collecting curbside recyclables, processing recycled materials, supplying the materials to companies, transporting materials, maintaining equipment, and more.</p>
                                </div>
                            <Button className='find-button image-border' variant='outlined' >FIND OUT HOW</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <h2 className='title-text'>Recycling Conserves Energy & Saves Resources</h2>
                                <div className='subtext'>
                                    <p>Recycling puts our used materials back into action as new products, helping to create a “circular economy” that eliminates waste and allows for a continuous use of resources. Why is that important? Because the earth’s natural resources aren’t endless, but limited.</p>
                                </div>
                            <Button className='find-button image-border' variant='outlined'>FIND OUT HOW</Button>
                        </Grid>
                        <Grid item xs={6} >
                            <Box sx={{ width: '400px', height: '400px', background: '#1F625578', margin: 'auto'}}></Box>
                        </Grid>
                        
                    </Grid>
                </section>



                <section className='recycling-tips'>
                    <h2 className='numbered-heading'>HOW CAN YOU RECYCLE?</h2>
                    <Grid container spacing={20}>
                        <Grid item xs={6}></Grid>
                    </Grid>
                </section>





                <section className='recycling-testimonials'>
                    <h2 style={{ marginBottom: '6rem'}} className='numbered-heading'>WHAT OTHERS ARE SAYING ABOUT RECYCLING</h2>
                    <Grid container  spacing={5}>
          
                
                        <Grid item xs={6} sx={{marginBottom:'1rem', background: '#1F625578'}}>
                            <Box sx={{margin: '1rem 1rem 3rem'}}>
                                <Box sx={{display:'flex', gap:'1rem',marginBottom: '1rem'}}>
                                    <Avatar sx={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'}}><InstagramIcon/></Avatar>
                                    <p style={{color:'var(--yellow)'}}>Lebron James</p>
                                </Box>
                                <Box>
                                    <Typography>Reducing your carbon footprint will help in a major way. It won’t be an easy process but if you put forth a lil’ bit of effort it can make a big difference in our environment #ReduceWaste #recycle #plastic #metal #electronics #glass #wood #cardboard #paper #rubber
                                    </Typography>
                                </Box>
                            </Box>
                        
                        </Grid>
                        <Grid item xs={6} sx={{marginBottom:'1rem', background: '#1F625578'}} >
                            <Box sx={{margin: '1rem 1rem 3rem'}}>
                                <Box sx={{display:'flex', gap:'1rem',marginBottom: '1rem'}}>
                                    <Avatar sx={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'}}><InstagramIcon/></Avatar>
                                    <p style={{color:'var(--yellow)'}}>Neil deGrasse Tyson</p>
                                </Box>
                                <Box>
                                    <Typography>Out of all the planets in the galaxy, this is the only one we can currently live on. Let's try to take care of it before we are gone. #recycle</Typography>
                                </Box>
                            </Box>
                        
                        </Grid>
                        <Grid item xs={6} sx={{marginBottom:'1rem', background: '#1F625578'}}>
                            <Box sx={{margin: '1rem 1rem 3rem'}}>
                                <Box sx={{display:'flex', gap:'1rem',marginBottom: '1rem'}}>
                                    <Avatar sx={{background: '#1DA1F2'}}><TwitterIcon/></Avatar>
                                    <p style={{color:'var(--yellow)'}}>Danny Devito</p>
                                </Box>
                                <Box>
                                    <Typography>Recycling.</Typography>
                                </Box>
                            </Box>
                        
                        </Grid>
                        <Grid item xs={6} sx={{marginBottom:'1rem', background: '#1F625578'}}>
                            <Box sx={{margin: '1rem 1rem 3rem'}}>
                                <Box sx={{display:'flex', gap:'1rem',marginBottom: '1rem'}}>
                                    <Avatar sx={{background: '#1DA1F2'}}><TwitterIcon/></Avatar>
                                    <p style={{color:'var(--yellow)'}}>Megan Thee Stallion</p>
                                </Box>
                                <Box>
                                    <Typography>Did you know #recycling food tins saves over 60% of energy that it would take to make new ones from raw materials? ⚡
                                    Next time you finish a tin, just give it a quick rinse before you pop it in the recycling bin! ♻
                                    </Typography>
                                </Box>
                            </Box>
                    
                        
                        </Grid>
                        <Grid item xs={6} sx={{marginBottom:'1rem', background: '#1F625578'}}>
                            <Box sx={{margin: '1rem 1rem 3rem'}}>
                                <Box sx={{display:'flex', gap:'1rem',marginBottom: '1rem'}}>
                                    <Avatar sx={{background: '#3b5998'}}><FacebookIcon/></Avatar>
                                    <p style={{color:'var(--yellow)'}}>Tom Cruise</p>
                                </Box>
                                <Box>
                                    <Typography>BIRDS ARE NOT REAL. BUT RECYCLING IS! Plastic bottle caps aren't recyclable as they're generally a different plastic from the bottle (not #1-#5). 
                                    Caps & lids can also jam processing equipment. And containers w/ tops may not compact properly during the recycling process. 
                                    #recycle #DoYourPart #ClimateAction</Typography>
                                </Box>
                            </Box>
                    
                        </Grid>
                        <Grid item xs={6} sx={{marginBottom:'1rem', background: '#1F625578'}}>
                            <Box sx={{margin: '1rem 1rem 3rem'}}>
                                <Box sx={{display:'flex', gap:'1rem',marginBottom: '1rem'}}>
                                    <Avatar sx={{background: '#3b5998'}}><FacebookIcon/></Avatar>
                                    <p style={{color:'var(--yellow)'}}>Fred Durst</p>
                                </Box>
                                <Box>
                                    <Typography>I recycle by eating all the plastic bottles in my house. #recycle #delicious</Typography>
                                </Box>
                            </Box>
                        
                        </Grid>
                
                    </Grid>
                </section>
            </section>
        </main>
        

        
    )
}

export default WhyRecycle;

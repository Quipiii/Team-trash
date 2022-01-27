import './RecycleUS.css'
import React from 'react'
import '../../App.css'
import { Grid,Box } from '@mui/material';





const RecycleUS = () => {

    return (
        <main id='content'>
            <section className='recycle-us'>
                <div className='big-fact'>
                    <Box className='recycle-box' sx={{width:'90%', display: 'flex', alignItems:'center', justifyContent:'center', padding: '20px'}}>
                        <h2 className='title-text recycle-box-header' style={{color:'var(--sub-text-color)', fontSize:'var(--fz-heading)'}}>
                            The U.S. offshores its plastic waste to other countries around the world instead of recycling
                        </h2>
                    </Box>  
                </div>

                <div className='short-message'>
                    <h3 style={{color:'#F1C24A'}}> The U.S. generates more plastic waste than any other nation and exporting it to other countries does not absolve us of its impact</h3>
                </div>

                <section>
                    <h2 className='numbered-heading'>'Recycling' here at home</h2>
                    <Grid container  spacing={4}>

                        
                        <Grid item xs={6} sx={{marginBottom: '4rem'}}>
                            <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}></Box>
                        </Grid>

                        <Grid item xs={6} >
                            <Box sx={{padding: '20px'}}>
                                <h2 className='recycleus-section-heading'>Why is't our garbage being recycled?</h2>
                                <p className='recycle--text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Box>    
                        </Grid>

                        
                        <Grid item xs={6} >
                            <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578'}}></Box>
                        </Grid>

                        <Grid item xs={6} >
                            <Box sx={{padding: '20px'}}>
                            <h2 className='recycleus-section-heading'>Where does our plastic actually go?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Box>    
                        </Grid>

                    </Grid>
                </section>

                <section>
                    <h2 className='numbered-heading'>Avergae Plastic Production In The US</h2>
                    <Grid container  spacing={4}>

                        <Grid item xs={4}>
                            <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}></Box>
                        </Grid>

                        <Grid item xs={8} >
                            <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578'}}></Box>
                        </Grid>

                        <Grid item xs={12} >
                            <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578'}}></Box>
                        </Grid>

                    </Grid>
                </section>

                <section>
                    <h2 className='numbered-heading'>Harms And Concerns With The Way The US Recycles</h2>
                    <Grid container  spacing={4} sx={{display: 'flex', flexDirection: 'row'}}>
                        
                            <Grid item xs={6}>
                                <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}></Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset'}}></Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ width: '100%', height: '300px', bgcolor: '#1F625578'}}></Box>
                            </Grid>
                       

                            <Grid item xs={6} >
                                <Box sx={{width: '100%', height: '300px', bgcolor: '#1F625578'}}></Box>
                            </Grid>

                            <Grid item xs={6} >
                                <Box sx={{width: '100%', height: '600px', bgcolor: '#1F625578'}}></Box>
                            </Grid>

                    </Grid>
                </section>


                
            </section>
        </main>
    )
}

export default RecycleUS

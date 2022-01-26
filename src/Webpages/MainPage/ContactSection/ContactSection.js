import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ContactSection = () => {
    return (
        <Box sx={{ 
            bgcolor: '#17463D', height: '50vh', width: '100vw',
            margin: '0',  display: 'grid', placeItems: 'center',
            textAlign: 'center', border: '1px solid white', position: 'absolute', top: '350vh'
        }} >
            <Container sx={{ height: '45vh', display: 'grid', placeItems: 'center',border: '1px solid white' }}>
                <Container sx={{ height: '60%', border: '1px solid white' }}>
                    <h3>04. What's Next?</h3>
                    <h1>Get In Touch</h1>
                    <p>
                        Don’t be afraid to reach out to us as our inbox is always open! Even if you 
                        just want to know more please reah out. We are always looking for others to 
                        support our cause! If you can, help us out by donating whatever you can.
                    </p>
                    <Button className='hello-btn' variant="outlined" sx={{color: '#9DC88D', borderColor: '#9DC88D'}}>Say Hello</Button>
                </Container>
            </Container>
        </Box>
    )
}

export default ContactSection;
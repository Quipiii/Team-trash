import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ContactSection = () => {
    return (
        <section id='#contact'>
            <h2 className='numbered-heading'>What's Next?</h2>
            <Box sx={{ 
                bgcolor: '#17463D', height: '50vh', width: '100%',
                display: 'grid', placeItems: 'center',
                textAlign: 'center'
            }} >
                <Box sx={{ height: '90%', width: '50%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                    <h2 className='title-text'>Get In Touch</h2>
                    <p>
                        Don’t be afraid to reach out to us as our inbox is always open! Even if you 
                        just want to know more please reach out. We are always looking for others to 
                        support our cause! If you can, help us out by donating whatever you can.
                    </p>
                    <Button className='hello-btn' variant="outlined" sx={{color: '#9DC88D', borderColor: '#9DC88D'}}>Say Hello</Button>
                </Box>
            </Box>
        </section>
    )
}

export default ContactSection;

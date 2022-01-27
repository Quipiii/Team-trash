import { Box, Button, Link } from '@mui/material';
import React from 'react';
import '../../../App.css';


const LandingPage = () => {
    return (
        <section className='landing-page'>
            <div className='landing-page-text-wrap'>
                <div className='fade-in' style={{transitionDelay: '100ms'}}><h1>Hey Yall, </h1></div>
                <div style={{transitionDelay: '200ms'}}><h2 className='big-heading'>Let's start recycling</h2></div>
                <div style={{transitionDelay: '300ms'}}><h2 className='big-heading'>today so we can have </h2></div>
                <div style={{transitionDelay: '400ms'}}><h2 className='big-heading'>a better future tomorrow.</h2></div>
                <div style={{transitionDelay: '500ms'}}>
                    <Button variant='outlined' sx={{margin: '30px 0px 0px 4px', color: 'var(--section-title-color)', borderColor: 'var(--section-title-color)'}}>
                        <Link href='#mission-statement' underline='none' sx={{color: 'var(--section-title-color)'}}>Click to get sarted</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;

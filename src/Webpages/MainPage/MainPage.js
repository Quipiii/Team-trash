import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import MissionStatement from './MissionStatement/MissionStatement'
import AboutPage from './AboutPage/AboutPage';
import RecyclePage from './RecyclePage/RecyclePage';
import ContactSection from './ContactSection/ContactSection';
import '../../App.css';
import { Box } from '@mui/material';


const MainPage = () => {
    return (
        <main id='content'>
            <Box sx={{width: '100%', boxSizing: 'inherit'}}>
                <LandingPage/>
                <MissionStatement/>
                <AboutPage/>
                <RecyclePage/>
                <ContactSection/>
            </Box>
        </main>
        

    )
};

export default MainPage;

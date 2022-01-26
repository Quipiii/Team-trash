import React from 'react';
import Container from '@mui/material/Container';
import AboutPage from './AboutPage/AboutPage';
// import RecyclePage from './RecyclePage/RecyclePage';
import ContactSection from './ContactSection/ContactSection';
import './MainPage.css';


const MainPage = () => {
    return (
        <Container maxWidth='false'>
            <AboutPage></AboutPage>
            {/* <RecyclePage/> */}
            <ContactSection/>
        </Container>

    )
};

export default MainPage;

import React from 'react';
import Container from '@mui/material/Container';
import AboutPage from './AboutPage/AboutPage';
// import RecyclePage from './RecyclePage/RecyclePage';
import ContactSection from './ContactSection/ContactSection';
import './MainPage.css';


const MainPage = () => {
    return (
        <main>
            {/* <Container maxWidth='false'> */}
                <section><AboutPage/></section>
                {/* <RecyclePage/> */}
                <section><ContactSection/></section>
            {/* </Container> */}
        </main>
        

    )
};

export default MainPage;

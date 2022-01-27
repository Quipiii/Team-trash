import React from 'react';
import Box from '@mui/material/Box';
import Card from '../../../components/Card/Card';
// import { Container } from '@mui/material';

import '../../../App.css';

const teamInfo1 = [
    {
        title: ' Meet Jaleel',
    },
    {
        title: ' Meet Adrian',
    }
];

const teamInfo2 = [
    {
        title: ' Meet Ben',
    },
    {
        title: ' Meet Franceka',
    }
];

const AboutPage = () => {
    return (
        <section id='about-page'>
            <h2 className='numbered-heading about'>Meet The Team</h2>
            <div > 
                <div>
                    <h2 className='title-text'>We bring a wealth of skills</h2>
                    <h2 className='title-text'>and experience from a wide </h2>
                    <h2 className='title-text'>range of backgrounds.</h2>
                </div>
                
                <Box sx={{ width: '100%', display: 'flex', alignItems:'center', justifyContent:'center', gap: '4rem' }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--sub-text-color)'}}>
                        {
                            teamInfo1.map((teammate)=>{
                                return <Card title={teammate.title}/>
                            })
                        }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '250px', color: 'var(--sub-text-color)'}}>
                        {
                            teamInfo2.map((teammate)=>{
                                return <Card title={teammate.title}/>
                            })
                        }
                    </Box>
                    
                </Box>
            </div>
        </section>
        
    )
}

export default AboutPage;

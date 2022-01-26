import React from 'react';
import Box from '@mui/material/Box';
import Card from '../../../components/Card/Card';
// import { Container } from '@mui/material';

import '../../../App.css';

const teamInfo = [
    {
        title: ' Meet Jaleel',
        description: 'Lorem blavhdv vfdshvhsvfv sv sv jvsdvj dsjvd vjs vj vkj sfkdv kswv'
    },
    {
        title: ' Meet Adrian',
        description: 'Lorem blavhdv vfdshvhsvfv sv sv jvsdvj dsjvd vjs vj vkj sfkdv kswv'
    },
    {
        title: ' Meet Ben',
        description: 'Lorem blavhdv vfdshvhsvfv sv sv jvsdvj dsjvd vjs vj vkj sfkdv kswv'
    },
    {
        title: ' Meet Franceka',
        description: 'Lorem blavhdv vfdshvhsvfv sv sv jvsdvj dsjvd vjs vj vkj sfkdv kswv'
    }
];

const AboutPage = () => {
    return (
        <section>
            <h2 className='numbered-heading about'>Meet The Team</h2>
            <div id='about-page'> 
                <Box sx={{ height: '50vh', width: '100%', height: '50vh',display: 'flex', alignItems: 'center', justifyContent:'center', gap: '1rem', border: '1px solid white' }} >
                    {
                        teamInfo.map((teammate)=>{
                            return <Card title={teammate.title} description={teammate.description}/>
                        })
                    }
                </Box>
            </div>
        </section>
        
    )
}

export default AboutPage;

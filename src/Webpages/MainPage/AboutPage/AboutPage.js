import React from 'react';
import Box from '@mui/material/Box';
import Card from '../../../components/Card/Card';

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
        <Box sx={{ height: '50vh', width: '100%', maxWidth: '900px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent:'center', gap: '2rem', border: '1px solid white' }} >
            {
                teamInfo.map((teammate)=>{
                    return <Card title={teammate.title} description={teammate.description}/>
                })
            }
        </Box>
    )
}

export default AboutPage;

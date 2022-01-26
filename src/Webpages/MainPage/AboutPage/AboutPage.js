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
        <Box sx={{ bgcolor: 'yellow', height: '100vh', width: '100vw', margin: '0', display: 'grid', placeItems: 'center' }} >
            {
                teamInfo.map((teammate)=>{
                    return <Card title={teammate.title} description={teamInfo.desciption}/>
                })
            }
        </Box>
    )
}

export default AboutPage;

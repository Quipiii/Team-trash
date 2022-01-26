import React from 'react';
import Sources from '../../components/Sources/Sources';
import './SourcesPage.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PlantDecor from '../../components/PlantDecor/PlantDecor';
import Nav from '../../components/Nav/Nav';
import NavRoutes from '../../components/NavRoutes/NavRoutes';

const sourceInfo = [
    {
        title: 'LINK TITLE',
        description: 'description',
        link: 'hgfrdewq '
    },
    {
        title: 'LINK TITLE',
        description: 'description',
        link: 'hgfrdewq '
    },
    {
        title: 'LINK TITLE',
        description: 'description',
        link: 'hgfrdewq '
    },
    {
        title: 'LINK TITLE',
        description: 'description'
    },
    {
        title: 'LINK TITLE',
        description: 'description',
        link: 'hgfrdewq '
    },
    {
        title: 'LINK TITLE',
        description: 'description',
        link: 'hgfrdewq '
    }
];

const SourcesPage = () => {

    return (
        <div className='sources-page'>
            <Nav/>
            <NavRoutes/>

            <PlantDecor />
            <Box sx={{ flexGrow: 1, display: 'grid', placeItems: 'center' }}>
                <div className='text'>
                    <h1 className='heading-text'>Other Noteworthy Sources To Do Some Extra Reading</h1>
                    <h3 className='archive-text center-text'>view the archive below</h3>
                </div>
                <Grid className='sources-container'container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        sourceInfo.map((source)=>{
                            return <Sources title={source.title} link={source.link} description={source.description}>s</Sources>
                        })
                    }
                    
                </Grid>
            </Box>
        </div>
    )
};

export default SourcesPage;

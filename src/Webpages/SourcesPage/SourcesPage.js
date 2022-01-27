import React from 'react';
import Sources from '../../components/Sources/Sources';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



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
        <main id='content'>
            <section className='sources-page'>
                <div >
                    <Box sx={{ flexGrow: 1, display: 'grid', placeItems: 'center' }}>
                        <div className='text'>
                            <h2 className='heading-text'>Other Noteworthy Sources To Do Some Extra Reading</h2>
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
            </section>
        </main>
        
    )
};

export default SourcesPage;

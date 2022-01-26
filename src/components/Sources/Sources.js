import React from 'react';
import Grid from '@mui/material/Grid';
// import LinkIcon from '@mui/icons-material/Link';

import './Sources.css';

const Sources = ({title, link, description}) => {
    return (
        <Grid item xs={4}>
            <div className='sources-link'>
                <div className='link-icon'>
                    <img src='./components/link_icon.png' alt=''></img>
                </div>
                <h2 className='link-title'>{title}</h2>
                <p className='link-description'>{description}</p>
            </div>
        </Grid>
    )
};

export default Sources;

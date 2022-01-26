import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
/* <Box sx={{ flexGrow: 1, position: 'absolute', top: 0, width: '100%', bgcolor: '#17463D' }}> */

export default function Nav() {
  return (

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            
          </Typography>
          <Button color="inherit" component={Link} to={'/'}>Home</Button>
          <Button color="inherit" component={Link} to={'/RecycleUS'}>Recycling in the US</Button>
          <Button color="inherit" component={Link} to={'/WhyRecycle'}>Why Recycle</Button>
          <Button color="inherit" component={Link} to={'/DonatePage'}>Donate</Button>
          <Button color="inherit" component={Link} to={'/SourcesPAge'}>Sources</Button>
        </Toolbar>
      </AppBar>
    
  );
}
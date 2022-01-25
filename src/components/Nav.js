import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import Links from '../pages/Links';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// const Nav = () => {
//   return (
//     <div className="nav-container">
      
//       {Links.map((element) => {
//         return <Link to={element.link}>{element.title}</Link>;
//       })}
//     </div>
//   );
// };

// export default Nav;
export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            
          </Typography>
          <Button color="inherit" component={Link} to={'/Home'}>Home</Button>
          <Button color="inherit" component={Link} to={'/RecyclingUS'}>Recycling in the US</Button>
          <Button color="inherit" component={Link} to={'/WhyRecycle'}>Why Recycle</Button>
          <Button color="inherit" component={Link} to={'/Donate'}>Donate</Button>
          <Button color="inherit" component={Link} to={'/Source'}>Source</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
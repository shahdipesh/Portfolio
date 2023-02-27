import React, { Component } from 'react';
import NavBarStyles from './NavBarStyle.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


class NavBar extends Component {
 render() {
   return (
    <div className="NavBarContainer">
      <Box sx={{ flexGrow: 1}}>
        <AppBar  position="static">
          <Toolbar  sx={{background:'black' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button className="NavBarButton" variant="Contained">
            <a href="https://github.com/shahdipesh">
            <Typography variant="h6">Github</Typography>
            </a>
              </Button>
            <Button className="NavBarButton" variant="Contained" >
            <a href="https://www.linkedin.com/in/shahdipesh99/" >
              <Typography variant="h6">LinkedIn</Typography>
              </a>
              </Button>
            <Button className="NavBarButton" variant="Contained">
            <a href="#contact" >
              <Typography variant="h6">Contact</Typography>
            </a>
              </Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
   )
 }
}

export default NavBar;
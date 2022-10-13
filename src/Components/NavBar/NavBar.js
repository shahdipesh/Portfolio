import React, { Component } from 'react';
import NavBarStyles from './NavBarStyle.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


class NavBar extends Component {
 render() {
   return (
    <div className="NavBarContainer">
      <Box sx={{ flexGrow: 1}}>
        <AppBar  position="static">
          <Toolbar  sx={{color:'black',background:`url(https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)` }}>
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
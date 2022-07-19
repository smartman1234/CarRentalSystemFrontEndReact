import { Component } from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" component="div">
                    Photos
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          );
  }
}

export default NavBar;

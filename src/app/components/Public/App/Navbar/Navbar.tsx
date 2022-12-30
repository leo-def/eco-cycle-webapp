import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LoginIcon from '@mui/icons-material/Login';
import { getIsLightTheme } from '../../../../hooks/Theme';
import { ThemeEnum } from '../../../../enums/Action/Theme.enum';
/**
 * Navbar
 * @param {any}  props Properties
 * @return {React.Component} Navbar Component
 */
export const Navbar = () => {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({
      type: ThemeEnum.TOGGLE
    });
  }
  const isLightTheme = getIsLightTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleTheme()}
          >
            {isLightTheme ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/login"
          >
            <LoginIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


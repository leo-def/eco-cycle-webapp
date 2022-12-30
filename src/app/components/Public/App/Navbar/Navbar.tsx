import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  Login as LoginIcon
} from '@mui/icons-material';
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


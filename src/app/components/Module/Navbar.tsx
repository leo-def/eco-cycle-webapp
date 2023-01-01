import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@mui/material';
import {
  Menu as MenuIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon
} from '@mui/icons-material';
import { getIsLightTheme } from '../../hooks/Theme';
import { ThemeEnum } from '../../enums/Action/Theme.enum';
import { SidebarEnum } from '../../enums/Action/Sidebar.enum';
import { AuthEnum } from '../../enums/Action/Auth.enum';
import { GroupSetSelect } from './Group/GroupSet/GroupSetSelect';

/**
 * Navbar
 * @param {any}  props Properties
 * @return {React.Component} Navbar Component
 */
export const Navbar = () => {
  const dispatch = useDispatch();
  const isLightTheme = getIsLightTheme();
  const isAdmin = true;
  const toggleSidebar = () => {
    dispatch({
      type: SidebarEnum.TOGGLE_SIDEBAR
    });
  }
  const toggleTheme = () => {
    dispatch({
      type: ThemeEnum.TOGGLE
    });
  }

  const logout = () => {
    dispatch({
      type: AuthEnum.LOGOUT
    });
  }

  return (<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleSidebar()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News{/* // i18n */}
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
          {isAdmin ? <GroupSetSelect /> : null}
          <Button
            color="inherit"
            onClick={() => logout()}>
            Sair{/* // i18n */}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>)
}


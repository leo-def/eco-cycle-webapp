import React from 'react';
import { CssBaseline } from '@mui/material';
import { AppBase } from '../../components/App/AppBase';
import AppProvider from '../../components/App/Provider/AppProvider/AppProvider';
import AppLoader from '../../components/App/Loader/AppLoader/AppLoader';
import './App.css';
import AuthBody from './AuthBody/AuthBody';

/**
 * App 
 *   Aplication Component
 * @param {any}  props Properties
 * @return {React.Component} App Component
 */
export const App = () => {

  return (
    <AppProvider>
      <CssBaseline />
      <AppLoader />
      <AppBase />
      <AuthBody />
    </AppProvider>
  );
}

export default App;

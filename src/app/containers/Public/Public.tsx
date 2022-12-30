import React from 'react';
import { Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../components/Public/App/Navbar/Navbar';
import { loginPageNav, logoutPageNav } from '../../types/Auth';
import { NotFound } from '../Shared/NotFound/NotFound';
import { Home } from './Home/Home';
import { Signup } from './Signup/Signup';
import { Login } from './Login/Login';
import { Logout } from '@mui/icons-material';


/**
 * Public
 *   Route to pages for non authenticated user
 * @param {any}  props Properties
 * @return {React.Component} Public Component
 */
export const Public = () => {
  return (<React.Fragment>

    <Grid container className="full-height">

      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12} className="full-height">
        <main className="full-height">
          <Routes>
            <Route index element={<Navigate to="home" replace={true} />} />
            <Route path="not-found" element={<NotFound to="dashboard" />} />
            <Route path={loginPageNav} element={<Login />} />
            <Route path={logoutPageNav} element={<Logout />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Navigate to="not-found" replace={true} />}></Route>
          </Routes>
        </main>
      </Grid>

    </Grid>
  </React.Fragment>)
}
export default Public

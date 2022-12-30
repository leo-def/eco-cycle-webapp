import React from 'react';
import { Grid } from '@mui/material';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GroupSetProvider } from '../../components/Module/Group/GroupSet/GroupSetProvider';
import { Sidebar } from '../../components/Module/Sidebar';
import { Navbar } from '../../components/Module/Navbar';
import { logoutPageNav } from '../../types/Auth';
import { NotFound } from '../Shared/NotFound/NotFound';
import { Logout } from '../Shared/Logout/Logout';
import { Dashboard } from './Dashboard';
import { Client } from './Client/Client';
import { Admin } from './Admin/Admin';
import { Group } from './Group/Group';

/**
 * Module
 *   Route to modules for authenticated user
 * @param {any}  props Properties
 * @return {React.Component} Module Component
 */
export const Module = () => {
  return (<GroupSetProvider>
    <Sidebar />

    <Grid container className="full-height">

      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={12} className="full-height">
        <main className="full-height">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route index element={<Navigate to="/dashboard" replace={true} />}></Route>
            <Route path={logoutPageNav} element={<Logout />} />
            <Route path="not-found" element={<NotFound to="dashboard" />} />
            <Route path="*" element={<ModulePathDefault />}>
            </Route>
          </Routes>
        </main>
      </Grid>

    </Grid>
  </GroupSetProvider>);
};

export const ModulePathDefault = () => {
  return (<Routes>
    <Route path="group/*" element={<Group />} />
    <Route path="admin/*" element={<Admin />} />
    <Route path="client/*" element={<Client />} />
    <Route path="*" element={<Navigate to="not-found" replace={true} />} />
  </Routes>)
}

export default Module;

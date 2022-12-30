import React from 'react';
import { Grid } from '@mui/material';
import { AdminDashboard } from '../../components/Module/Admin/AdminDashboard';
import { ClientDashboard } from '../../components/Module/Client/ClientDashboard';
import { GroupDashboard } from '../../components/Module/Group/GroupDashboard';
import { DashboardCard } from '../../components/Shared/Dashboard/DashboardCard';

/**
 * Module Dashboard
 * @param {any}  props Properties
 * @return {React.Component} Module Dashboard Component
 */
export const Dashboard = React.memo((props) => {
  Dashboard.displayName = 'Dashboard';

  return (<Grid container spacing={1}>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ProfileDashboardCard {...props} />
    </Grid>

    <ClientDashboard />
    <AdminDashboard />
    <GroupDashboard />
  </Grid>);
})

export const ProfileDashboardCard = (props) => {
  return (<DashboardCard to="/profile" title="Perfil" desc="" {...props} />); // i18n
}



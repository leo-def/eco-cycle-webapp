import React from 'react';
import { Grid } from '@mui/material';
import { DashboardCard } from '../../Shared/Dashboard/DashboardCard';

/**
 * Module AdminDashboard
 * @param {any}  props Properties
 * @return {React.Component} Module AdminDashboard Component
 */
export const AdminDashboard = React.memo((props) => {
  return (<React.Fragment>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <GroupDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <MeasurementUnitDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <PhysicalQuantityDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ProductDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <UserDashboardCard {...props} />
    </Grid>
  </React.Fragment>);
});

//#region Admin
export const GroupDashboardCard = (props) => {
  // isAdmin
  return (<DashboardCard to="/admin/group" title="Grupo" desc="" {...props} />);
}

export const MeasurementUnitDashboardCard = (props) => {
  // isAdmin
  return (<DashboardCard to="/admin/measurement-unit" title="Unidades de Medida" desc="" {...props} />);
}

export const PhysicalQuantityDashboardCard = (props) => {
  // isAdmin
  return (<DashboardCard to="/admin/physical-quantity" title="Grandezas de Medida" desc="" {...props} />);
}

export const ProductDashboardCard = (props) => {
  // isAdmin
  return (<DashboardCard to="/admin/product" title="Produtos" desc="" {...props} />);
}

export const UserDashboardCard = (props) => {
  // isAdmin
  return (<DashboardCard to="/admin/user" title="Usuarios" desc="" {...props} />);
}
  //#endregion
import React from 'react';
import { Grid } from '@mui/material';
import { getSetGroup } from '../../../hooks/Module/Group/Set';
import { DashboardCard } from '../../Shared/Dashboard/DashboardCard';

/**
 * Module ClientDashboard
 * @param {any}  props Properties
 * @return {React.Component} Module ClientDashboard Component
 */
export const ClientDashboard = React.memo((props) => {
  ClientDashboard.displayName = 'ClientDashboard';
  const setGroup = getSetGroup();
  if (!setGroup) {
    return null;
  }
  return (<React.Fragment>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ClientItemOfferCollectDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <ClientItemOfferSupplyDashboardCard {...props} />
    </Grid>

  </React.Fragment>)
})

//#region Group

export const ClientItemOfferCollectDashboardCard = (props) => {
  // hasGroup isOwner
  return (<DashboardCard to="/client/collect" title="Areas de Coleta" desc="" {...props} />); // i18n
}

export const ClientItemOfferSupplyDashboardCard = (props) => {
  // hasGroup isOwner
  return (<DashboardCard to="/client/supply" title="Produtos Oferecidos" desc="" {...props} />); // i18n
}

//#endregion
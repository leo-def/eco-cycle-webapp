import React from 'react';
import { Grid } from '@mui/material';
import { getSetGroup } from '../../../hooks/Module/Group/Set';
import { DashboardCard } from '../../Shared/Dashboard/DashboardCard';

/**
 * Module GroupDashboard
 * @param {any}  props Properties
 * @return {React.Component} Module GroupDashboard Component
 */
export const GroupDashboard = React.memo((props) => {
  GroupDashboard.displayName = 'GroupDashboard';
  const setGroup = getSetGroup();
  if (!setGroup) {
    return null;
  }
  return (<React.Fragment>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <GroupProfileDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CollaboratorDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <PlaceDashboardCard {...props} />
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={3}>
      <VehicleDashboardCard {...props} />
    </Grid>

  </React.Fragment>)
})

//#region Group
export const GroupProfileDashboardCard = (props) => {
  // hasGroup isOwner
  return (<DashboardCard to="/group/profile" title="Perfil da empresa" desc="" {...props} />); // i18n
}

export const CollaboratorDashboardCard = (props) => {
  // hasGroup isOwner
  return (<DashboardCard to="/group/collaborator" title="Colaboradores" desc="" {...props} />); // i18n
}

export const PlaceDashboardCard = (props) => {
  // hasGroup
  return (<DashboardCard to="/group/place" title="Locais" desc="" {...props} />); // i18n
}

export const VehicleDashboardCard = (props) => {
  // hasGroup
  return (<DashboardCard to="/group/vehicle" title="Veiculos" desc="" {...props} />); // i18n
}

export const GroupItemOfferCollectDashboardCard = (props) => {
  // hasGroup isOwner
  return (<DashboardCard to="/group/collect" title="Areas de Coleta" desc="" {...props} />); // i18n
}

export const GroupItemOfferSupplyDashboardCard = (props) => {
  // hasGroup isOwner
  return (<DashboardCard to="/group/supply" title="Produtos Oferecidos" desc="" {...props} />); // i18n
}

//#endregion
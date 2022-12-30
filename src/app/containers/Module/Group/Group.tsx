import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import { getSetGroup } from '../../../hooks/Module/Group/Set';
import { GroupCollaborator } from './Collaborator/GroupCollaborator';
import { GroupItemOfferCollect } from './ItemOffer/GroupItemOfferCollect';
import { GroupItemOfferSupply } from './ItemOffer/GroupItemOfferSupply';
import { GroupPlace } from './Place/GroupPlace';
import { GroupVehicle } from './Vehicle/GroupVehicle';

/**
 * Group
 * @param {any}  props Properties
 * @return {React.Component} Group Component
 */
export const Group = React.memo(() => {
  Group.displayName = 'Group';
  const setGroup = getSetGroup();
  if (!setGroup) {
    return null;
  }
  return (
    <Routes>
      {/*<Route index element={<Navigate to="dashboard" replace={true} />} />*/}
      <Route path="collaborator" element={<GroupCollaborator />} />
      <Route path="place" element={<GroupPlace />} />
      <Route path="vehicle" element={<GroupVehicle />} />
      <Route path="collect" element={<GroupItemOfferCollect />} />
      <Route path="supply" element={<GroupItemOfferSupply />} />
    </Routes>);
})

import React, { useMemo } from 'react';
import { VehicleCrud } from '../../../../components/Module/Group/VehicleCrud';
import { getSetGroup } from '../../../../hooks/Module/Group/Set';

/**
 * GroupVehicle
 *   GroupVehicle component
 * @param {any}  props Properties
 * @return {React.Component} GroupVehicle Component
 */
export const GroupVehicle = (props: any) => {
  const setGroup = getSetGroup();
  const pathParams = useMemo(() => setGroup ? ({ group: setGroup.id }) : null, [setGroup]);
  return (<VehicleCrud
    {...props}
    pathParams={pathParams} />);
}
export default GroupVehicle;
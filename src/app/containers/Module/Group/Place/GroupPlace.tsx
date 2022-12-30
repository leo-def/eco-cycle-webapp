import React, { useMemo } from 'react';
import { PlaceCrud } from '../../../../components/Module/Group/PlaceCrud';
import { getSetGroup } from '../../../../hooks/Module/Group/Set';

/**
 * GroupPlace
 *   GroupPlace component
 * @param {any}  props Properties
 * @return {React.Component} GroupPlace Component
 */
export const GroupPlace = (props: any) => {
  const setGroup = getSetGroup();
  const pathParams = useMemo(() => setGroup ? ({ group: setGroup.id }) : null, [setGroup]);
  return (<PlaceCrud
    {...props}
    pathParams={pathParams} />);
}
export default GroupPlace;
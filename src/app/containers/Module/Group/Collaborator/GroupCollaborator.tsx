import React, { useMemo } from 'react';
import { CollaboratorCrud } from '../../../../components/Module/Group/CollaboratorCrud';
import { getSetGroup } from '../../../../hooks/Module/Group/Set';

/**
 * GroupCollaborator
 *   GroupCollaborator component
 * @param {any}  props Properties
 * @return {React.Component} GroupCollaborator Component
 */
export const GroupCollaborator = (props: any) => {
  const setGroup = getSetGroup();
  const pathParams = useMemo(() => setGroup ? ({ group: setGroup.id }) : null, [setGroup]);

  return (<CollaboratorCrud
    {...props}
    pathParams={pathParams} />);
}
export default GroupCollaborator;
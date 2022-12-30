import React from 'react';
import { GroupCrud }  from '../../../../components/Module/Admin/GroupCrud';

/**
 * GroupAdmin
 *   GroupAdmin component
 * @param {any}  props Properties
 * @return {React.Component} GroupAdmin Component
 */
export const GroupAdmin = (props: any) => {
  return (<GroupCrud {...props} />);
}
export default GroupAdmin;
import React from 'react';
import { UserCrud } from '../../../../components/Module/Admin/UserCrud';

/**
 * UserAdmin
 *   UserAdmin component
 * @param {any}  props Properties
 * @return {React.Component} UserAdmin Component
 */
export const UserAdmin = (props: any) => {
  return (<UserCrud {...props} />);
}
export default UserAdmin;
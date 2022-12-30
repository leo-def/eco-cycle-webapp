import React from 'react';
import { PhysicalQuantityCrud }  from '../../../../components/Module/Admin/PhysicalQuantityCrud';

/**
 * PhysicalQuantityAdmin
 *   PhysicalQuantityAdmin component
 * @param {any}  props Properties
 * @return {React.Component} PhysicalQuantityAdmin Component
 */
export const PhysicalQuantityAdmin = (props: any) => {
  return (<PhysicalQuantityCrud {...props} />);
}
export default PhysicalQuantityAdmin;
import React from 'react';
import { MeasurementUnitCrud } from '../../../../components/Module/Admin/MeasurementUnitCrud';

/**
 * MeasurementUnitAdmin
 *   MeasurementUnitAdmin component
 * @param {any}  props Properties
 * @return {React.Component} MeasurementUnitAdmin Component
 */
export const MeasurementUnitAdmin = (props: any) => {
  return (<MeasurementUnitCrud {...props} />);
}
export default MeasurementUnitAdmin;
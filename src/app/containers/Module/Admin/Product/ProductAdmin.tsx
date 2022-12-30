import React from 'react';
import { ProductCrud } from '../../../../components/Module/Admin/ProductCrud';

/**
 * ProductAdmin
 *   ProductAdmin component
 * @param {any}  props Properties
 * @return {React.Component} ProductAdmin Component
 */
export const ProductAdmin = (props: any) => {
  return (<ProductCrud {...props} />);
}
export default ProductAdmin;
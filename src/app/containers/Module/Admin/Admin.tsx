import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import { GroupAdmin } from './Group/GroupAdmin';
import MeasurementUnitAdmin from './MeasurementUnit/MeasurementUnitAdmin';
import PhysicalQuantityAdmin from './PhysicalQuantity/PhysicalQuantityAdmin';
import { ProductAdmin } from './Product/ProductAdmin';
import { UserAdmin } from './User/UserAdmin';

/**
 * Admin
 * @param {any}  props Properties
 * @return {React.Component} Admin Component
 */
export const Admin = React.memo(() => {
  Admin.displayName = 'Admin';
  return (<Routes>
    <Route path="group" element={<GroupAdmin />} />
    <Route path="measurement-unit" element={<MeasurementUnitAdmin />} />
    <Route path="physical-quantity" element={<PhysicalQuantityAdmin />} />
    <Route path="product" element={<ProductAdmin />} />
    <Route path="user" element={<UserAdmin />} />
  </Routes>);
})

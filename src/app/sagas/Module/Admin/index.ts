import groupSaga from './Group';
import measurementUnit from './MeasurementUnit'; 
import physicalQuantity from './PhysicalQuantity'; 
import productSaga from './Product';
import userSaga from './User';

const adminSagas: any[] = [
    ...groupSaga,
    ...measurementUnit,
    ...physicalQuantity,
    ...productSaga,
    ...userSaga
];

export default adminSagas;
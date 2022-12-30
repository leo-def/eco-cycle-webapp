import physicalQuantityCrudSaga from './PhysicalQuantityCrud';
import physicalQuantityFetchSaga from './PhysicalQuantityFetch';

const physicalQuantitySagas: any[] = [
    physicalQuantityCrudSaga,
    physicalQuantityFetchSaga
]

export default physicalQuantitySagas


export { PhysicalQuantityCrudService } from './PhysicalQuantityCrudService';
import physicalQuantityCrudService from './PhysicalQuantityCrudService';
export { PhysicalQuantityMockCrudService } from './PhysicalQuantityMockCrudService';
import physicalQuantityMockCrudService from './PhysicalQuantityMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? physicalQuantityMockCrudService : physicalQuantityCrudService;
export default service;

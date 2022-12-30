
export { MeasurementUnitCrudService } from './MeasurementUnitCrudService';
import measurementUnitCrudService from './MeasurementUnitCrudService';
export { MeasurementUnitMockCrudService } from './MeasurementUnitMockCrudService';
import measurementUnitMockCrudService from './MeasurementUnitMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? measurementUnitMockCrudService : measurementUnitCrudService;
export default service;

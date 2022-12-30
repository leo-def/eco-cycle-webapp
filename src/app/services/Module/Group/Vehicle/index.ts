
export { VehicleCrudService } from './VehicleCrudService';
import vehicleCrudService from './VehicleCrudService';
export { VehicleMockCrudService } from './VehicleMockCrudService';
import vehicleMockCrudService from './VehicleMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? vehicleMockCrudService : vehicleCrudService
export default service

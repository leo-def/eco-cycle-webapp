
export { PlaceCrudService } from './PlaceCrudService';
import placeCrudService from './PlaceCrudService';
export { PlaceMockCrudService } from './PlaceMockCrudService';
import placeMockCrudService from './PlaceMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? placeMockCrudService : placeCrudService
export default service

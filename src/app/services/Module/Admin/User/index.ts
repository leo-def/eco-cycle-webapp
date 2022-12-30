
export { UserCrudService } from './UserCrudService';
import userCrudService from './UserCrudService';
export { UserMockCrudService } from './UserMockCrudService';
import userMockCrudService from './UserMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? userMockCrudService : userCrudService
export default service

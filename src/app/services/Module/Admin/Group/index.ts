
export { GroupCrudService } from './GroupCrudService';
import groupCrudService from './GroupCrudService';
export { GroupMockCrudService } from './GroupMockCrudService';
import groupMockCrudService from './GroupMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? groupMockCrudService : groupCrudService;
export default service;

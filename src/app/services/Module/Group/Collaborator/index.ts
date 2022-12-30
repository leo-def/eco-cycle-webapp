
export { CollaboratorCrudService } from './CollaboratorCrudService';
import collaboratorCrudService from './CollaboratorCrudService';
export { CollaboratorMockCrudService } from './CollaboratorMockCrudService';
import collaboratorMockCrudService from './CollaboratorMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? collaboratorMockCrudService : collaboratorCrudService
export default service

export { AuthService } from './AuthService';
import authService from './AuthService';
export { AuthMockService } from './AuthMockService';
import authMockService from './AuthMockService';
import { MockUtils } from '../../utils/MockUtils';

// TODO: remove hard code
const isMock = MockUtils.isMock();
export const service = isMock ? authMockService : authService;
export default service;


export { AddressService } from './AddressService';
import addressService from './AddressService';
export { AddressMockService } from './AddressMockService';
import addressMockService from './AddressMockService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? addressMockService : addressService
export default service

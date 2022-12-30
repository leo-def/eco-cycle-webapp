
export { ProductCrudService } from './ProductCrudService';
import productCrudService from './ProductCrudService';
export { ProductMockCrudService } from './ProductMockCrudService';
import productMockCrudService from './ProductMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? productMockCrudService : productCrudService
export default service

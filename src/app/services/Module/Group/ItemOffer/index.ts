
export { ItemOfferCrudService } from './ItemOfferCrudService';
import itemOfferCrudService from './ItemOfferCrudService';
export { ItemOfferMockCrudService } from './ItemOfferMockCrudService';
import itemOfferMockCrudService from './ItemOfferMockCrudService';
import { MockUtils } from '../../../../utils/MockUtils';

const isMock = MockUtils.isMock()
export const service = isMock ? itemOfferMockCrudService : itemOfferCrudService
export default service

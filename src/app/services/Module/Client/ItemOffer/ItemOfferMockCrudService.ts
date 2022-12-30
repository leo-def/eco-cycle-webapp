/* eslint-disable @typescript-eslint/no-unused-vars */
import ItemOfferMock from '../../../../types/Entity/ItemOffer/ItemOfferDTOMock.json';
import ItemOfferMockList from '../../../../types/Entity/ItemOffer/ItemOfferDTOMockList.json';
import ItemOfferMockListPaginated from '../../../../types/Entity/ItemOffer/ItemOfferDTOMockListPaginated.json';
import { ItemOffer } from '../../../../types/Entity/ItemOffer/ItemOffer';
import { MockCrudService } from '../../../Crud/MockCrudService';

const itemOfferDTOMock: ItemOffer = ItemOfferMock as any;
const itemOfferDTOMockList: Array<ItemOffer> = ItemOfferMockList as Array<any>;
const itemOfferDTOMockListPaginated = (ItemOfferMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar ItemOffer
 *
 * @name ItemOfferCrudService
 * @module service/Module/Admin/ItemOffer/Crud
 * @category Serviço
 * @subcategory ItemOffer
 */
export class ItemOfferMockCrudService extends MockCrudService {

    protected path(): string { return 'ItemOfferMockCrudService' }

    protected mock() { return this.resolve(itemOfferDTOMock) }

    protected mockList(): Promise<Array<any>> { return this.resolve(itemOfferDTOMockList) }

    protected mockListPaginated(): Promise<any> { return this.resolve(itemOfferDTOMockListPaginated) }

    protected mockLimit() { return 10 }
}

export default new ItemOfferMockCrudService()

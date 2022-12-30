/* eslint-disable @typescript-eslint/no-unused-vars */
import ProductMock from '../../../../types/Entity/Product/ProductDTOMock.json';
import ProductMockList from '../../../../types/Entity/Product/ProductDTOMockList.json';
import ProductMockListPaginated from '../../../../types/Entity/Product/ProductDTOMockListPaginated.json';
import { Product } from '../../../../types/Entity/Product/Product';
import { MockCrudService } from '../../../Crud/MockCrudService';

const productDTOMock: Product = ProductMock as any;
const productDTOMockList: Array<Product> = ProductMockList as Array<any>;
const productDTOMockListPaginated = (ProductMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar Product
 *
 * @name ProductCrudService
 * @module service/Module/Admin/Product/Crud
 * @category Serviço
 * @subcategory Product
 */
export class ProductMockCrudService extends MockCrudService {

    protected path(): string { return 'ProductMockCrudService'; }

    protected mock() { return this.resolve(productDTOMock); }

    protected mockList(): Promise<Array<any>> { return this.resolve(productDTOMockList); }

    protected mockListPaginated(): Promise<any> { return this.resolve(productDTOMockListPaginated); }

    protected mockLimit() { return 10; }
}

export default new ProductMockCrudService();

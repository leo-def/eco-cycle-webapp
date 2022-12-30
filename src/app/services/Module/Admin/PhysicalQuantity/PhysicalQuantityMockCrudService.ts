/* eslint-disable @typescript-eslint/no-unused-vars */
import PhysicalQuantityMock from '../../../../types/Entity/Measure/PhysicalQuantity/PhysicalQuantityDTOMock.json';
import PhysicalQuantityMockList from '../../../../types/Entity/Measure/PhysicalQuantity/PhysicalQuantityDTOMockList.json';
import PhysicalQuantityMockListPaginated from '../../../../types/Entity/Measure/PhysicalQuantity/PhysicalQuantityDTOMockListPaginated.json';
import { PhysicalQuantity } from '../../../../types/Entity/Measure/PhysicalQuantity/PhysicalQuantity';
import { MockCrudService } from '../../../Crud/MockCrudService';

const physicalQuantityDTOMock: PhysicalQuantity = PhysicalQuantityMock as any;
const physicalQuantityDTOMockList: Array<PhysicalQuantity> = PhysicalQuantityMockList as Array<any>;
const physicalQuantityDTOMockListPaginated = (PhysicalQuantityMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar PhysicalQuantity
 *
 * @name PhysicalQuantityCrudService
 * @module service/Module/Admin/PhysicalQuantity/Crud
 * @category Serviço
 * @subcategory PhysicalQuantity
 */
export class PhysicalQuantityMockCrudService extends MockCrudService {

    protected path(): string { return 'PhysicalQuantityMockCrudService'; }

    protected mock() { return this.resolve(physicalQuantityDTOMock); }

    protected mockList(): Promise<Array<any>> { return this.resolve(physicalQuantityDTOMockList); }

    protected mockListPaginated(): Promise<any> { return this.resolve(physicalQuantityDTOMockListPaginated); }

    protected mockLimit() { return 10; }
}

export default new PhysicalQuantityMockCrudService();

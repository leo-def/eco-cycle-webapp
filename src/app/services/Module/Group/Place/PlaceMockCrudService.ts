/* eslint-disable @typescript-eslint/no-unused-vars */
import PlaceMock from '../../../../types/Entity/Place/PlaceDTOMock.json';
import PlaceMockList from '../../../../types/Entity/Place/PlaceDTOMockList.json';
import PlaceMockListPaginated from '../../../../types/Entity/Place/PlaceDTOMockListPaginated.json';
import { Place } from '../../../../types/Entity/Place/Place';
import { GroupMockCrudService } from '../GroupMockCrudService';

const placeDTOMock: Place = PlaceMock as any;
const placeDTOMockList: Array<Place> = PlaceMockList as Array<any>;
const placeDTOMockListPaginated = (PlaceMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar Place
 *
 * @name PlaceCrudService
 * @module service/Module/Admin/Place/Crud
 * @category Serviço
 * @subcategory Place
 */
export class PlaceMockCrudService extends GroupMockCrudService {

    protected path (): string {  return 'PlaceMockCrudService' }

    protected mock() { return this.resolve(placeDTOMock) }

    protected mockList(): Promise<Array<any>> { return this.resolve(placeDTOMockList) }

    protected mockListPaginated(): Promise<any> { return this.resolve(placeDTOMockListPaginated) }

    protected mockLimit() { return 10 }
}

export default new PlaceMockCrudService()

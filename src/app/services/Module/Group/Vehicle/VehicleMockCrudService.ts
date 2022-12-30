/* eslint-disable @typescript-eslint/no-unused-vars */
import VehicleMock from '../../../../types/Entity/Vehicle/VehicleDTOMock.json';
import VehicleMockList from '../../../../types/Entity/Vehicle/VehicleDTOMockList.json';
import VehicleMockListPaginated from '../../../../types/Entity/Vehicle/VehicleDTOMockListPaginated.json';
import { Vehicle } from '../../../../types/Entity/Vehicle/Vehicle';
import { GroupMockCrudService } from '../GroupMockCrudService';

const userDTOMock: Vehicle = VehicleMock as any;
const userDTOMockList: Array<Vehicle> = VehicleMockList as Array<any>;
const userDTOMockListPaginated = (VehicleMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar Vehicle
 *
 * @name VehicleCrudService
 * @module service/Module/Admin/Vehicle/Crud
 * @category Serviço
 * @subcategory Vehicle
 */
export class VehicleMockCrudService extends GroupMockCrudService {

    protected path(): string { return 'VehicleMockCrudService'; }

    protected mock() { return this.resolve(userDTOMock); }

    protected mockList(): Promise<Array<any>> { return this.resolve(userDTOMockList); }

    protected mockListPaginated(): Promise<any> { return this.resolve(userDTOMockListPaginated); }

    protected mockLimit() { return 10; }
}

export default new VehicleMockCrudService();

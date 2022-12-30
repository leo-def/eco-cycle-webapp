/* eslint-disable @typescript-eslint/no-unused-vars */
import MeasurementUnitMock from '../../../../types/Entity/Measure/MeasurementUnit/MeasurementUnitDTOMock.json';
import MeasurementUnitMockList from '../../../../types/Entity/Measure/MeasurementUnit/MeasurementUnitDTOMockList.json';
import MeasurementUnitMockListPaginated from '../../../../types/Entity/Measure/MeasurementUnit/MeasurementUnitDTOMockListPaginated.json';
import { MeasurementUnit } from '../../../../types/Entity/Measure/MeasurementUnit/MeasurementUnit';
import { MockCrudService } from '../../../Crud/MockCrudService';

const measurementUnitDTOMock: MeasurementUnit = MeasurementUnitMock as any;
const measurementUnitDTOMockList: Array<MeasurementUnit> = MeasurementUnitMockList as Array<any>;
const measurementUnitDTOMockListPaginated = (MeasurementUnitMockListPaginated) as any;

/**
 * Serviço para acionar a serviços da api para gerenciar MeasurementUnit
 *
 * @name MeasurementUnitCrudService
 * @module service/Module/Admin/MeasurementUnit/Crud
 * @category Serviço
 * @subcategory MeasurementUnit
 */
export class MeasurementUnitMockCrudService extends MockCrudService {

    protected path(): string { return 'MeasurementUnitMockCrudService'; }

    protected mock() { return this.resolve(measurementUnitDTOMock); }

    protected mockList(): Promise<Array<any>> { return this.resolve(measurementUnitDTOMockList); }

    protected mockListPaginated(): Promise<any> { return this.resolve(measurementUnitDTOMockListPaginated); }

    protected mockLimit() { return 10; }
}

export default new MeasurementUnitMockCrudService();

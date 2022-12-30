
import { MeasurementUnit } from '../../../../types/Entity/Measure/MeasurementUnit/MeasurementUnit';
import { CrudService } from '../../../Crud';

/**
 * Serviço para acionar a serviços da api para gerenciar MeasurementUnit
 *
 * @name MeasurementUnitCrudService
 * @module service/Module/Admin/MeasurementUnit/Crud
 * @category Serviço
 * @subcategory MeasurementUnit
 */
export class MeasurementUnitCrudService extends CrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'admin/measurement-unit/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as MeasurementUnit;
  }

  protected loadRequestBody(value: any) {
    return value as MeasurementUnit;
  }
}

export default new MeasurementUnitCrudService()

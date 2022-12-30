import { Vehicle } from '../../../../types/Entity/Vehicle/Vehicle';
import { GroupCrudService } from '../GroupCrudService';

/**
 * Serviço para acionar a serviços da api para gerenciar Vehicle
 *
 * @name VehicleCrudService
 * @module service/Module/Admin/Vehicle/Crud
 * @category Serviço
 * @subcategory Vehicle
 */
export class VehicleCrudService extends GroupCrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected defaultGroupPath(): string {
    return 'vehicle/';
  }


  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as Vehicle;
  }

  protected loadRequestBody(value: any) {
    return value as Vehicle;
  }
}

export default new VehicleCrudService();

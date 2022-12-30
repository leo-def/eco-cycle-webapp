import { PhysicalQuantity } from '../../../../types/Entity/Measure/PhysicalQuantity/PhysicalQuantity';
import { CrudService } from '../../../Crud';

/**
 * Serviço para acionar a serviços da api para gerenciar Group
 *
 * @name PhysicalQuantityCrudService
 * @module service/Module/Admin/PhysicalQuantity/Crud
 * @category Serviço
 * @subcategory PhysicalQuantity
 */
export class PhysicalQuantityCrudService extends CrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'admin/physical-quantity/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as PhysicalQuantity;
  }

  protected loadRequestBody(value: any) {
    return value as PhysicalQuantity;
  }
}

export default new PhysicalQuantityCrudService()

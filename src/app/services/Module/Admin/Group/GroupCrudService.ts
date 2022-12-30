import { Group } from '../../../../types/Entity/Group/Group';
import { CrudService } from '../../../Crud';

/**
 * Serviço para acionar a serviços da api para gerenciar Group
 *
 * @name GroupCrudService
 * @module service/Module/Admin/Group/Crud
 * @category Serviço
 * @subcategory Group
 */
export class GroupCrudService extends CrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'admin/group/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as Group;
  }

  protected loadRequestBody(value: any) {
    return value as Group;
  }
}

export default new GroupCrudService()

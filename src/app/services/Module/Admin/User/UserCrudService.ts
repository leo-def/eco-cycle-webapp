import { User } from '../../../../types/Entity/User/User';
import { CrudService } from '../../../Crud';

/**
 * Serviço para acionar a serviços da api para gerenciar User
 *
 * @name UserCrudService
 * @module service/Module/Admin/User/Crud
 * @category Serviço
 * @subcategory User
 */
export class UserCrudService extends CrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'admin/user/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as User;
  }

  protected loadRequestBody(value: any) {
    return value as User;
  }
}

export default new UserCrudService();

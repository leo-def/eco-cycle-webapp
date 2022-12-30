import { Collaborator } from '../../../../types/Entity/Collaborator/Collaborator';
import { GroupCrudService } from '../GroupCrudService';

/**
 * Serviço para acionar a serviços da api para gerenciar Collaborator
 *
 * @name CollaboratorCrudService
 * @module service/Module/Admin/Collaborator/Crud
 * @category Serviço
 * @subcategory Collaborator
 */
export class CollaboratorCrudService extends GroupCrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected defaultGroupPath(): string {
    return 'collaborator/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as Collaborator;
  }

  protected loadRequestBody(value: any) {
    return value as Collaborator;
  }
}

export default new CollaboratorCrudService();

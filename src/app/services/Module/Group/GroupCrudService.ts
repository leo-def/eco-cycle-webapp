import { CrudService } from '../../Crud';

/**
 * Serviço abstrado para encapsular todos os serviços relacionados a Grupo
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
    const defaultGroupPath = this.defaultGroupPath();
    return `group/:group/${defaultGroupPath}`;
  }


  protected defaultGroupPath(): string {
    return '';
  }

}

export default new GroupCrudService();

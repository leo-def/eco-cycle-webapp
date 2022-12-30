import { Place } from '../../../../types/Entity/Place/Place';
import { GroupCrudService } from '../GroupCrudService';

/**
 * Serviço para acionar a serviços da api para gerenciar Place
 *
 * @name PlaceCrudService
 * @module service/Module/Admin/Place/Crud
 * @category Serviço
 * @subcategory Place
 */
export class PlaceCrudService extends GroupCrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected defaultGroupPath(): string {
    return 'place/';
  }


  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as Place;
  }

  protected loadRequestBody(value: any) {
    return value as Place;
  }
}

export default new PlaceCrudService();

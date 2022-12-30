import { ItemOffer } from '../../../../types/Entity/ItemOffer/ItemOffer';
import { CrudService } from '../../../Crud';


/**
 * Serviço para acionar a serviços da api para gerenciar ItemOffer
 *
 * @name ItemOfferCrudService
 * @module service/Module/Admin/ItemOffer/Crud
 * @category Serviço
 * @subcategory ItemOffer
 */
export class ItemOfferCrudService extends CrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'client/item-offer/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as ItemOffer;
  }

  protected loadRequestBody(value: any) {
    return value as ItemOffer;
  }
}

export default new ItemOfferCrudService();

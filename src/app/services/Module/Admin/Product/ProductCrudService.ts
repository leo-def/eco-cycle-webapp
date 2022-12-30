import { Product } from '../../../../types/Entity/Product/Product';
import { CrudService } from '../../../Crud';

/**
 * Serviço para acionar a serviços da api para gerenciar Product
 *
 * @name ProductCrudService
 * @module service/Module/Admin/Product/Crud
 * @category Serviço
 * @subcategory Product
 */
export class ProductCrudService extends CrudService {
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'admin/product/';
  }

  /**
   * Converte o retorno da API
   *
   * @param {any} value Retorno da api
   *
   * @returns {any}
   */
  protected loadResponseBody(value: any): any {
    return value as Product;
  }

  protected loadRequestBody(value: any) {
    return value as Product;
  }
}

export default new ProductCrudService();


import { URLUtils } from '../../../../utils/URLUtils';
import api from '../../../Api';

/**
 * Serviço para acionar a serviços da api para gerenciar Address
 *
 * @name AddressService
 * @module service/Module/Admin/Address/Crud
 * @category Serviço
 * @subcategory Address
 */
export class AddressService {
  static SEARCH_ADDRESS_BY_CEP_PATH = 'code/:code'
  /**
   * Retorna o inicio do caminho para o acesso dos serviços especifico da API
   *
   * @returns {String}
   *
  */
  protected baseURL(): string {
    return 'shared/address/';
  }


  /**
   * Converte o retorno da API
   *
   * @param {any} address Valores para consulta do endereço
   *
   * @returns {any}
   */
  searchAddressByCode(payload: any): any {
    const { code } = payload;
    const pathParams = { code };
    const params = { pathParams };
    const url = this.getPath(params, AddressService.SEARCH_ADDRESS_BY_CEP_PATH);
    return api.get(url);
  }

  protected getPath(params?: any, path?: any): string {
    const baseUrl = this.baseURL();
    return URLUtils.getSubPath(baseUrl, path, params);
  }

}

export default new AddressService();

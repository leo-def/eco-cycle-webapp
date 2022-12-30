/* eslint-disable @typescript-eslint/no-unused-vars */
import AddressMock from '../../../../types/Entity/Address/AddressDTOMock.json';
import { Address } from '../../../../types/Entity/Address/Address';
import { AddressService } from './AddressService';

const addressDTOMock: Address = AddressMock as any;

/**
 * Serviço de consulta de 
 *
 * @name AddressCrudService
 * @module service/Module/Admin/Address/Crud
 * @category Serviço
 * @subcategory Address
 */
export class AddressMockService extends AddressService {

  /**
   * Converte o retorno da API
   *
   * @param {any} address Valores para consulta do endereço
   *
   * @returns {any}
   */
  search(address: any): any {
    return Promise.resolve(addressDTOMock);
  }
}

export default new AddressMockService();

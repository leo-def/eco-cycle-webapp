/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiService } from "./ApiService";

export function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}
/**
 * Serviço para acionar a serviços da api para gerenciar 
 *
 * @name ApiService
 * @module service/Api
 * @category Serviço
 * @subcategory 
 */
export class MockApiService extends ApiService {

  protected log(...data) {
    try{
    console.log(` \n\r ${this.getPath() || 'MockApiService'}: \n\r `, ...data);
    } catch(err) {
      console.log(` \n\r ${this.getPath() || 'MockApiService'}: \n\r `);
    }
  }
  protected mockListPaginated(): Promise<any> {
    return Promise.resolve({
      "totalItems": 0,
      "totalPages": 0,
      "pageSize": 10,
      "currentPage": 0,
      "content": new Array<any>()
    } as any)
  }

  protected path (): string {
    return ''
  }


  protected resolve(task): any {
    return Promise.resolve(task)
      .then(sleeper(1000))
  }
  protected mockList(): Promise<Array<any>> {
    return this.resolve(new Array<any>())
  }

  protected mock(): Promise<any> {
    return this.resolve({} as any)
  }

  protected mockLimit() {
    return 5;
  }

}

export default new MockApiService()

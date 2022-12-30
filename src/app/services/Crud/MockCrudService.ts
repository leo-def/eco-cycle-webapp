/* eslint-disable @typescript-eslint/no-unused-vars */
import { CrudService } from './CrudService';

export function sleeper(ms) {
  return function (x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}

/**
 * Serviço para acionar a serviços da api para gerenciar 
 *
 * @name CrudService
 * @module service/Crud
 * @category Serviço
 * @subcategory 
 */
export class MockCrudService extends CrudService {

  protected log(...data) {
    try {
      console.log(` \n\r ${this.getPath() || 'MockCrudService'}: \n\r `, ...data);
    } catch (err) {
      console.log(` \n\r ${this.getPath() || 'MockCrudService'}: \n\r `);
    }
  }

  protected mockListPaginated(): Promise<any> {
    return Promise.resolve({
      "totalItems": 0,
      "totalPages": 0,
      "pageSize": 10,
      "currentPage": 0,
      "content": new Array<any>()
    } as any);
  }

  protected path(): string {
    return '';
  }


  protected resolve(task): any {
    return Promise.resolve(task)
      .then(sleeper(1000));
  }
  protected mockList(): Promise<Array<any>> {
    return this.resolve(new Array<any>());
  }

  protected mock(): Promise<any> {
    return this.resolve({} as any);
  }

  protected mockLimit() {
    return 5;
  }

  fetch(params?: any): Promise<any> {
    this.log(`fetch => \n\r params: ${JSON.stringify(params)
      }) \n\r `);
    const paginated = this.mockListPaginated();
    return this.resolve(paginated)
      .then((response: any) => this.resolveFetchResponse(response));
  }

  create(value: any, parent?: any): Promise<any> {
    this.log(`create \n\r (value: ${JSON.stringify(value)
      }, \n\r parent: ${JSON.stringify(parent)
      }) \n\r `);
    return Promise.resolve(value);
  }

  remove(item: any, parent?: any): Promise<any> {
    this.log(`remove \n\r (item: ${JSON.stringify(item)
      }, \n\r parent: ${JSON.stringify(parent)
      }) \n\r `);
    return Promise.resolve(item);
  }

  update(item: any, parent?: any): Promise<any> {
    this.log(`update \n\r (item: ${JSON.stringify(item)
      }, \n\r parent: ${JSON.stringify(parent)
      }) \n\r`);
    return Promise.resolve(item);
  }

  find(id: any, parent?: any): Promise<any> {
    this.log(`find \n\r (id: ${JSON.stringify(id)
      }, \n\r parent: ${JSON.stringify(parent)
      }) \n\r `);
    return this.mock();
  }

  all(filter: any, parent?: any): Promise<Array<any>> {
    this.log(`all \n\r (filter: ${JSON.stringify(filter)
      }, \n\r parent: ${JSON.stringify(parent)
      }) \n\r `);
    return this.mockList();
  }
}

export default new MockCrudService();

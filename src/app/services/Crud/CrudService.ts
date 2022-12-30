import api, { ApiService } from '../Api';
export class CrudService extends ApiService {
  static SEARCH_PATH = 'search';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  fetch(payload?: any): Promise<any> {
    const {
      fetchParams,
      ...others
    } = (payload || {})
    const url = this.getPath(others, CrudService.SEARCH_PATH);
    return api.post(
      url,
      fetchParams || {}
    ).then((response: any) => this.resolveFetchResponse(response));
  }

  create(value: any, config?: any): Promise<any> {
    const url = this.getPath(config);
    return api
      .post(url, this.loadRequestBody(value))
      .then(response => this.loadResponse(response));
  }

  remove(item: any, payload?: any): Promise<any> {
    if (!item) {
      return Promise.resolve(null);
    }
    const url = this.getPath(payload, item);
    return api
      .delete(url)
      .then(response => this.loadResponse(response));
  }

  update(item: any, payload?: any): Promise<any> {
    if (!item) {
      return Promise.resolve(null);
    }
    const url = this.getPath(payload, item);
    return api
      .put(url, this.loadRequestBody(item))
      .then(response => this.loadResponse(response));
  }

  find(item: any, payload?: any): Promise<any> {
    const url = this.getPath(payload, item);
    return api
      .get(url)
      .then(response => this.loadResponse(response));
  }

  all(payload?: any): Promise<Array<any>> {
    const url = this.getPath(payload);
    return api
      .get(url)
      .then(response => this.loadResponse(response));
  }

}

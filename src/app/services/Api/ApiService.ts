import api from '../Api';
import { FetchResponse } from '../../types/Fetch/FetchResponse';
import { URLUtils } from '../../utils/URLUtils';

export class ApiService {

  protected baseURL() {
    return '/';
  }
  protected getParams() {
    return null;
  }

  protected get api() {
    return api;
  }

  protected getIdField() {
    return 'id';
  }

  protected getItemId(item: any): string {
    const idField = this.getIdField();
    return item ? item[idField] || item : null;
  }

  protected loadRequestBody(value: any) {
    return value;
  }

  protected loadResponseBody(value: any) {
    return value;
  }

  protected loadResponse(value: any) {
    return Array.isArray(value)
      ? value.map(val => this.loadResponseBody(val))
      : this.loadResponseBody(value);
  }

  protected resolveQuery(params?: any) {
    return params; //##!! new SearchParamsRequest(params).toJson()
  }

  protected resolveFetchResponse(response?: any) {
    return response as FetchResponse;
  }

  protected getPath(params?: any, path?: any): string {
    const baseUrl = this.baseURL();
    if (path && typeof path !== 'string') {
      path = this.getItemId(path);
    }
    return URLUtils.getSubPath(baseUrl, path, params);
  }

  protected getMimeType(type) {
    if (type === 'xls' || type === 'xlsx') {
      return 'application/vnd.ms-excel';
    } else {
      return 'application/vnd.pdf';
    }
  }

}

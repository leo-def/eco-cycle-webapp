
import _ from 'lodash';

export class URLUtils {

  static getSubPath(url: string, path?: string, params?: any) {
    return URLUtils.resolveParams(
      (path ? `${url}${path}` : url),
      params
    );
  }

  static resolveParams(url: string, params?: any) {
    const {
      pathParams,
      queryParams
    } = (params || {})
    if (queryParams) {
      url = this.resolveQueryParams(url, queryParams);
    }
    if (pathParams) {
      url = this.resolvePathParams(url, pathParams);
    }
    return url;
  }

  static resolvePathParams(url: string, pathParams?: any): string {
    if (!pathParams) {
      return url;
    }
    Object.keys(pathParams).forEach((key) => {
      url = url.replace(`:${key}`, pathParams[key])
    });
    return url;
  }

  static resolveQueryParams(url: string, queryParams?: any) {
    if (!queryParams) {
      return url;
    }
    const keys = Object
      .keys(queryParams).filter(key => queryParams[key] !== undefined && queryParams[key] !== null)
    if (keys.length === 0) {
      return url;
    }
    const query = encodeURI(keys
      .map(key => `${key}=${queryParams[key]}`)
      .join('&'))
    return `${url}?${query}`
  }

  static clearPathParams(body: any) {
    return _.pickBy(body, _.identity);
  }
}
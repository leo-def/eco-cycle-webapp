
// eslint-disable-next-line no-unused-vars
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { DateUtils } from '../../utils/DateUtils';
import { URLUtils } from '../../utils/URLUtils';

const API_ROOT = process.env.REACT_APP_URL_GATEWAY_API;

export class Api {
  private static authToken: string;
  static setAuthToken(authToken: string) {
    Api.authToken = authToken;
    return authToken;
  }

  static getAxiosParams(params = {} as any) {
    const authToken = Api.authToken;
    return ({
      ...(params || {}),
      baseURL: API_ROOT,
      timeout: 999999,
      headers: {
        ...(params ? params.headers || {} : {}),
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(!authToken ? {} : { Authorization: `Bearer ${authToken}` })
      }
    } as AxiosRequestConfig);
  }

  static request(params) {
    return axios(Api.getAxiosParams(params));
  }

  static getAuthToken() {
    return Api.authToken;
  }

  static utils() {
    return ApiUtils;
  }

  get client(): AxiosInstance {
    return axios.create(Api.getAxiosParams());
  }

  get(path: string, config?: any, params: any = {valid: true}): Promise<any> | Promise<any> {
    const { valid, ...others } = params;
    return this.client.get(
      URLUtils.resolveParams(path, others),
      config
    ).then((response: any) => {
      return valid ? this.validRequest(response) : response
    });
  }

  post(path: string, payload: any, config?: any, params: any = {valid: true}): Promise<any> {
    const { valid, ...others } = params;
    return this.client.post(
      URLUtils.resolveParams(path, others),
      payload,
      config
    ).then((response: any) => {
      return valid ? this.validRequest(response) : response
    });
  }

  patch(path: string, payload: any, config?: any, params: any = {valid: true}): Promise<any> {
    const { valid, ...others } = params;
    return this.client.patch(
      URLUtils.resolveParams(path, others),
      payload,
      config
    ).then((response: any) => {
      return valid ? this.validRequest(response) : response
    });
  }

  put(path: string, payload: any, params: any = {valid: true}): Promise<any> {
    const { valid, ...others } = params;
    return this.client.put(
      URLUtils.resolveParams(path, others),
      payload
    ).then((response: any) => {
      return valid ? this.validRequest(response) : response
    });
  }

  delete(path: string, config?: any, params: any = {valid: true}): Promise<any> {
    const { valid, ...others } = params;
    return this.client.delete(
      URLUtils.resolveParams(path, others),
      config
    ).then((response: any) => {
      return valid ? this.validRequest(response) : response
    });
  }


  validRequest(response: any) {
    const data = response.data;
    if (typeof data === 'string') {
      return data;
    }
    const { error, ...dataInfo } = data;
    if (error) {
      throw dataInfo;
    }
    return data;
  }
}

class ApiUtils {
  static dateFormat = 'YYYY-mm-ddTHH:MM:ssZ';

  static dateToString = (date: any) => {
    return DateUtils.dateToString(date, ApiUtils.dateFormat);
  }

  static stringToDate = (date: any) => {
    return DateUtils.stringToDate(date, ApiUtils.dateFormat);
  }
}

export default new Api();

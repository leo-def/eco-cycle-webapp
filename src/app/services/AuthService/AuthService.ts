import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { TokenHeaderService } from '../Auth/TokenHeaderService';
import { TokenStorageService } from './TokenStorageService';
import { Token } from '../../types/Auth';


const AUTH_ROOT = process.env.REACT_APP_URL_GATEWAY;


/**
 * AuthService, class representing a authentication service.s
 */
export class AuthService {

  static getAxiosParams() {
    return ({
      baseURL: AUTH_ROOT,
      timeout: 99999,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    } as AxiosRequestConfig);
  }


  get client(): AxiosInstance {
    return axios.create(AuthService.getAxiosParams());
  }

  protected async requestLogin(auth: any): Promise<any> {
    const path = 'auth/login';
    return this.client.post(path, auth)
      .then((value: AxiosResponse) => (value.data));
  }

  protected async requestProfile(): Promise<any> {
    const path = 'auth/profile';
    return this.client.get(path)
      .then((value: AxiosResponse) => (value.data));
  }

  private async setToken(token?: Token) {
    TokenStorageService.setToken(token);
    return await TokenHeaderService.setTokenHeader(token);

  }

  private async removeToken() {
    TokenStorageService.removeToken();
    return await TokenHeaderService.removeTokenHeader();
  }

  /**
   * Login, Aunthenticate in server.
   * @param {{username: string, password: string}} auth - Axios http request config.
   * @return {any} Authentication info.
   */
  async login(auth: any): Promise<any> {
    const response = await this.requestLogin(auth);
    if (response?.access_token) {
      return await this.setToken(response?.access_token);
    }
    return await this.removeToken();
  }

  /**
   * Logout, remove authenticaion info from local storage.
   */
  async logout() {
    return this.removeToken();
  }

  async load(): Promise<any> {
    const token = TokenStorageService.getToken();
    if (!token) {
      await this.removeToken();
      return null;
    }
    try {
      await TokenHeaderService.setTokenHeader(token);

      const profile = await this.requestProfile();

      if (!profile) {
        await this.removeToken();
        return null;
      }

      return token;
    } catch (err) {
      await this.removeToken();
      return null;
    }
  }

}

export default new AuthService();

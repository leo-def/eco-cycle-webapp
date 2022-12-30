import axios, { AxiosRequestHeaders } from 'axios';
import { Token } from '../../types/Auth';

export class TokenHeaderService {
  
    static removeTokenHeader(): Token | undefined {
      return TokenHeaderService.setTokenHeader();
    }
  
    static setTokenHeader(token?: Token): Token | undefined {
      axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
        ...(token
          ? { Authorization: `Bearer ${token}` }
          : { Authorization: null }
        )
      } as AxiosRequestHeaders;
      return token;
    }
  }